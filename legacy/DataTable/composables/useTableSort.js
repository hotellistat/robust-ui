import { computed } from 'vue'

export default function useTableSort(data, columnsData) {
  const sortedData = computed({
    get() {
      return [...data.value].sort((a, b) => {
        let result = 0
        columnsData.value
          .filter((column) => column.sortDirection)
          .some((column) => {
            if (column.sortDirection) {
              const compared = column.sort
                ? column.sort(a[column.key], b[column.key])
                : a[column.key].localeCompare(b[column.key])
              if (compared) {
                return (result = compared * column.sortDirection)
              }
            }
          })
        return result
      })
    },
  })

  return {
    sortedData,
  }
}
