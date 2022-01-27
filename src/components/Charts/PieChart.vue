<template>
  <div ref="chart" id="pie-chart" class="w-full h-full">
    <div id="d3-chart-tooltip"></div>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  reactive,
  ref
} from 'vue'
import * as d3 from 'd3'

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    },
    overview: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const dimensions = reactive({
      width: undefined,
      height: undefined
    })
    const resizeObserver = ref(undefined)
    const chart = ref()

    const pieChart = (container, data) => {
      const getFilteredData = () => data.filter((e) => !e.disabled)

      const splitPoint = 670
      const verticalOffset = 40
      const svgWidth = Math.max(dimensions.width, 200)
      let svgHeight = Math.max(300, verticalOffset * data.length)
      const outerRadius = Math.min(Math.min(svgWidth, svgHeight) / 3.5, 150)
      const innerRadius = outerRadius * 0.9
      const color10 = d3.scaleOrdinal([
        '#D1D5DB',
        '#FCA5A5',
        '#FCD34D',
        '#6EE7B7',
        '#93C5FD',
        '#A5B4FC',
        '#C4B5FD',
        '#F9A8D4'
      ])
      const fontSize = 14
      const overviewFontSize = 24
      const mobileMarigin = 150
      svgHeight =
        dimensions.width < splitPoint
          ? verticalOffset * data.length + outerRadius * 2 + mobileMarigin
          : svgHeight

      const pie = d3
        .pie()
        .value((d) => (d.disabled ? 0 : d.value))
        .sort(null)

      let svg = container.selectAll('svg').data([null])
      svg.exit().remove()

      svg = svg
        .enter()
        .append('svg')
        .attr('id', 'd3-chart')
        .merge(svg)
        .attr('height', svgHeight)
        .attr('width', svgWidth)

      const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)

      let path = svg.selectAll('g').data([null])
      path.exit().remove()

      const positionX =
        dimensions.width < splitPoint
          ? svgWidth / 2
          : svgWidth / 2 + outerRadius
      const positionY =
        dimensions.width < splitPoint ? outerRadius : svgHeight / 2

      path = path
        .enter()
        .append('g')
        .attr('id', 'paths')
        .merge(path)
        .attr('transform', `translate(${positionX}, ${positionY})`)

      let overview = path.selectAll('.overview').data([null])
      overview.exit().remove()

      overview = overview
        .enter()
        .append('text')
        .text(() => {
          return sentencase(props.overview)
        })
        .merge(overview)
        .attr('font-size', overviewFontSize)
        .attr('class', 'overview')
        .attr('font-family', 'Inter, sans-serif')
        .attr('transform', function () {
          const width = this.getBBox().width
          return `translate(${-(width / 2)}, ${overviewFontSize / 3})`
        })

      function drawCircleChart () {
        const paths = path.selectAll('.chart-paths')

        let selection = paths.data(pie(data))

        // remove phase
        selection.exit().remove()

        // entry phase
        selection = selection
          .enter()
          .append('path')
          .merge(selection)
          .attr('fill', () => 'transparent')
          .attr('class', () => 'chart-paths')
          .attr('opacity', () => 0)
          .transition()
          .ease(d3.easeCircleInOut)
          .duration(() => 300)
          .delay((_, i) => i * 50)
          .attrTween('d', function (d) {
            const interpolate = d3.interpolate(this._current, d)
            this._current = interpolate(0)
            return function (t) {
              d3.select(this).attr('opacity', t)
              return arc(interpolate(t))
            }
          })
          .attrTween('fill', function (d, i) {
            const interpolate = d3.interpolateRgb('transparent', color10(i))
            return (t) => {
              return interpolate(t)
            }
          })

        // update phase
        selection
          .attr('fill', (_, i) => {
            return color10(i)
          })
          .transition()
          .ease(d3.easeCircleInOut)
          .duration(0)
          .attrTween('d', function (d) {
            const interpolate = d3.interpolate(this._current, d)
            this._current = interpolate(100)
            return (t) => {
              return arc(interpolate(t))
            }
          })
          .each(function (d) {
            this._current = d
          })
      }

      drawCircleChart()

      // const squareSide = getHeightAndWidthOfSqr(innerRadius)
      const legendPositionX =
        dimensions.width > splitPoint ? mobileMarigin / 4 : 5
      const legendPositionY =
        dimensions.width < splitPoint
          ? outerRadius * 2 + mobileMarigin
          : svgHeight / 2 - verticalOffset * (data.length / 2 - 0.5)

      let textContainer = svg.selectAll('#legend-g').data([null])
      textContainer.exit().remove()

      textContainer = textContainer
        .enter()
        .append('g')
        .attr('transform', `translate(${legendPositionX}, ${legendPositionY})`)
        .attr('id', 'legend-g')

      // const textContainerHeight = squareSide / data.length

      textContainer
        .selectAll('.lagend')
        .data(data)
        .enter()
        .append('g')
        .attr('opacity', 0)
        .attr('class', 'lagend')
        .attr('font-size', fontSize)
        .attr('transform', (_, i) => `translate(${0}, ${i * verticalOffset})`)
        .transition()
        .duration((_, i) => 750 + 100 * i)
        .delay(() => 750)
        .attrTween('opacity', () => (t) => t)

      textContainer
        .selectAll('.lagend')
        .append('circle')
        .attr('r', fontSize / 2.5)
        .attr('fill', (_, i) => color10(i))
        .on('click', function (e, d) {
          if (getFilteredData(data).length <= 1 && !d.disabled) {
            return
          }
          const rect = d3.select(this.parentElement)
          d.disabled = !d.disabled
          rect.attr('disabled', d.disabled)
          drawCircleChart()
        })

      textContainer
        .selectAll('.lagend')
        .append('text')
        .text((d) => sentencase(d.display))
        .attr('font-family', 'Inter, sans-serif')
        .attr('transform', () => `translate(${fontSize + 4 + 15}, ${5})`)

      const valuePositionX =
        svgWidth < splitPoint ? svgWidth - fontSize / 2 : fontSize + 4 + 200

      textContainer
        .selectAll('.lagend')
        .append('text')
        .text((d) => {
          const sum = d3.sum(getFilteredData(data).map((e) => e.value))
          const parcentageVal = (sum ? (100 * d.value) / sum : 0).toFixed(2)
          return sentencase(parcentageVal + '%')
        })
        .attr('text-align', 'right')
        .attr('text-anchor', 'end')
        .attr('font-family', 'Inter, sans-serif')
        .attr('transform', () => `translate(${valuePositionX}, ${5})`)

      // ------------
      // Tooltips
      let tooltips = d3.select('#d3-chart-tooltip').data([null])
      tooltips.exit().remove()

      tooltips = tooltips
        .enter()
        .append('div')
        .merge(tooltips)
        .attr('class', 'tooltip-div')

      let label = tooltips.selectAll('.label').data([null])
      label.exit().remove()
      label = label.enter().append('div').attr('class', 'label')

      let count = tooltips.selectAll('.count').data([null])
      count.exit().remove()
      count = count.enter().append('div').attr('class', 'count')

      let percent = tooltips.selectAll('.percent').data([null])
      percent.exit().remove()
      percent = percent.enter().append('div').attr('class', 'percent')

      svg.selectAll('path').on('mouseover', (e, d) => {
        const sum = d3.sum(getFilteredData(data).map((e) => e.value))
        const parcentageVal = (sum ? (100 * d.value) / sum : 0).toFixed(2)
        tooltips.select('div.label').text(d.data.display)
        tooltips.select('div.count').text('value: ' + d.value)
        tooltips.select('div.percent').text(parcentageVal + '%')
      })

      svg.selectAll('path').on('mousemove', (e) => {
        const tooltipWidth = tooltips.node().getBoundingClientRect().width
        tooltips.style('opacity', 1)
        tooltips.style('top', e.pageY + 10 + 'px')
        tooltips.style('left', e.pageX - tooltipWidth / 2 + 'px')
      })

      svg.selectAll('path').on('mouseout', () => {
        tooltips.select('div.label').text('')
        tooltips.select('div.count').text('')
        tooltips.select('div.percent').text('')
        tooltips.style('opacity', 0)
      })

      function sentencase (str) {
        if (!str) return str
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
      }
    }

    const calculateContainerBoundingDimensions = (el) => {
      const boundingBox = el.getBoundingClientRect()
      dimensions.width = boundingBox.width
      dimensions.height = boundingBox.height
    }

    const render = () => {
      const chart = d3.select('#pie-chart')
      pieChart(chart, props.data)
    }

    const resized = (el) => {
      el = chart.value
      calculateContainerBoundingDimensions(el)
      render()
    }

    onMounted(() => {
      resizeObserver.value = new ResizeObserver(resized)
      resizeObserver.value.observe(chart.value)
      calculateContainerBoundingDimensions(chart.value)
      render()
    })

    return {
      pieChart,
      resizeObserver,
      chart,
      render,
      dimensions
    }
  }
})
</script>

<style>
#d3-chart path {
  transition: all ease-in-out 0.3s;
  position: relative;
}

#d3-chart .lagend rect {
  cursor: pointer;
}

#d3-chart .lagend[disabled='true'] {
  opacity: 0.5;
}

#d3-chart .lagend[disabled='true'] text {
  text-decoration: line-through;
}

.tooltip-div {
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.8px;
  word-spacing: 1.05px;
  pointer-events: none;
  padding: 10px;
  position: absolute;
  background: #eee;
  color: #555;
  min-width: 100px;
  z-index: 10000;
  opacity: 0;
  border-radius: 3px;
  box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.278);
  text-transform: capitalize;
  transition: left ease-in-out 0.3s, top ease-in-out 0.6s;
}
</style>
