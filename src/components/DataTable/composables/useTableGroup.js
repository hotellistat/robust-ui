import { computed } from "vue";

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || {
      children: [],
      collapsed: false
    }).children.push(x);
    return rv;
  }, {});
};

export default function useTableGroup(data, columns, groupKey) {
  const groupedData = computed({
    get() {
      if (!groupKey.value) return data.value;
      return groupBy(data.value, groupKey.value);
    }
  });

  const groupedColumn = computed({
    get() {
      if (!groupKey.value) return columns.value;
      const index = columns.value.findIndex(
        (column) => column.key === groupKey.value
      );
      let clonedColumns = [...columns.value];
      const targetColumn = clonedColumns.splice(index, 1)[0];
      clonedColumns = [targetColumn, ...clonedColumns];

      return clonedColumns;
    }
  });

  return {
    groupedData,
    groupedColumn
  };
}
