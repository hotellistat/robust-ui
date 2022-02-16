import { App } from 'vue'

let draggingElement: HTMLElement | null // element being dragged
let draggingElementHandle: HTMLElement | null // element's handle
let draggingElementIndex: number | null // index of element being dragged
let items: any // data items in list

let config: any // directive configuration

const emit = (eventName: any, vnode: any, eventData = undefined) => {
  if (vnode.componentInstance) {
    vnode.componentInstance.$emit(eventName, eventData)
  } else {
    vnode.el.dispatchEvent(new CustomEvent(eventName, eventData))
  }
}

const isBefore = (el1: HTMLElement, el2: HTMLElement) => {
  if (el2.parentNode === el1.parentNode) {
    for (let cur = el1.previousSibling; cur; cur = cur.previousSibling) {
      if (cur === el2) {
        return true
      }
    }
  }
  return false
}

const onDragStart = function (this: HTMLElement, e: any, vnode: any): void {
  emit('start', vnode, e)
  if (e.dataTransfer) { // `touchstart` event doesn't have `dataTransfer` property
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', null)
  } else { // touchstart event
    if (this.getAttribute('draggable') !== 'true') {
      return
    }
  }

  draggingElement = this
  draggingElementHandle = config.handleClass && draggingElement.querySelector(`.${config.handleClass}`)
  draggingElementIndex = Array.from(draggingElement?.parentElement?.children as HTMLCollection).indexOf(draggingElement)
  draggingElement?.parentElement?.classList.add('drag')
}

const onDragEnter = function (this: any, e: any) {
  if (!draggingElement) return
  const _el = Object.assign(this, {}) // element we are hovering over
  if (e.type === 'touchmove') {
    // prevent scrolling on touch drag
    e.stopPropagation()
    e.preventDefault()

    // touch workaround; get all elements we are hovering over, then select one from the list
    Array.from(document.elementsFromPoint(e.touches[0].clientX, e.touches[0].clientY)).forEach(v => {
      if (Array.from(draggingElement?.parentElement?.children as HTMLCollection).indexOf(v) >= 0) {
        return v
      }
    })
  }

  // if (_el === draggingElement) return
  if (Array.from(draggingElement?.parentElement?.children as HTMLCollection).indexOf(_el) === -1) return

  draggingElement.classList.add(config.placeholderClass)
  if (isBefore(draggingElement, _el)) {
    _el.parentNode.insertBefore(draggingElement, _el)
  } else {
    _el.parentNode.insertBefore(draggingElement, _el.nextSibling)
  }
}

const onDragEnd = (e: any, vnode: any) => {
  if (!draggingElement) return
  emit('end', vnode, e)

  if (draggingElementHandle) {
    draggingElement.setAttribute('draggable', 'false')
  }
  draggingElement.classList.remove(config.placeholderClass)
  draggingElement?.parentElement?.classList.remove('drag')

  const from = draggingElementIndex
  const to = Array.from(draggingElement?.parentElement?.children as HTMLCollection).indexOf(draggingElement)
  items.splice(to, 0, items.splice(from, 1)[0]) // move within array
  emit('change', vnode, { from, to } as any)
  setTimeout(() => {
    draggingElement = null
    draggingElementIndex = null
    draggingElementHandle = null
  }, 0)
}

const makeDraggable = (element: any, vnode: any) => {
  const handleElement = config.handleClass && element.querySelector(`.${config.handleClass}`)

  if (handleElement) { // handle makes item draggable
    handleElement.onmousedown = (e: any) => {
      element.setAttribute('draggable', 'true')
    }
    handleElement.ontouchstart = (e: any) => {
      element.parentElement.classList.add('drag')
      element.setAttribute('draggable', 'true')
    }
    handleElement.onmouseup = (e: any) => { // `dragstart` not triggered onClick, so need this to cover onClick event
      element.setAttribute('draggable', 'false')
    }
    handleElement.ontouchend = (e: any) => {
      element.parentElement.classList.remove('drag')

      element.setAttribute('draggable', 'false')
    }
    element.ondragend = (e: any) => {
      e.target.setAttribute('draggable', 'false')
    }
  } else {
    element.setAttribute('draggable', 'true')
  }

  element.ondragstart = (e: any) => onDragStart.bind(element, e, vnode)()

  element.ondragenter = onDragEnter
  element.ondragend = (e: any) => onDragEnd.bind(element, e, vnode)()
  // touch support
  element.ontouchstart = (e: any) => onDragStart.bind(element, e, vnode)()
  element.ontouchmove = onDragEnter
  element.ontouchend = (e: any) => onDragEnd.bind(element, e, vnode)()
}

export default {
  install(Vue: App) {
    Vue.directive('draggable', {
      mounted: (listElement: any, binding: any, vnode: any) => {
        let count = binding.value.depth || 0
        while (count) {
          listElement = listElement.firstElementChild
          count--
        }
        try {
          if (undefined === (binding.value && binding.value.value)) {
            throw new Error('A binding `value` property is not set.')
          }
          if (!Array.isArray(binding.value.value)) {
            throw new Error('`value` property value should be an array.')
          }
        } catch (err) {
          return console.error(err)
        }
        items = binding.value && binding.value.value
        config = {
          handleClass: (binding.value && binding.value.handle) || '',
          placeholderClass: (binding.value && binding.value.placeholderClass) || 'v-draggable__placeholder'
        }

        Array.from(listElement.children).forEach(item => makeDraggable(item, vnode))

        listElement.addEventListener('DOMNodeInserted', function (this: HTMLElement, e: any) {
          if (draggingElement) return // prevent onenter insert
          // checks for removing/adding items
          if (e.target.nodeType !== Node.ELEMENT_NODE) return // target must be valid node element
          if (Array.from(this.children).indexOf(e.target) === -1) return // must be direct child of the list
          makeDraggable(e.target, vnode)
        })
      }
    })
  }
}
