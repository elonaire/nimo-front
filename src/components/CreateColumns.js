export function createColumns(columnNames) {
  const columns = [];

  for (let i = 0; i < columnNames.length; i++) {
    const columnObject = {
      title: null,
      field: null,
    };
    
    const columnName = columnNames[i];
    let columnNameArr = columnName.split(" ");
    for (let j = 0; j < columnNameArr.length; j++) {
      if (j === 0) {
        columnNameArr[j] = columnNameArr[j].toLowerCase();
      } else {
        columnNameArr[j] = columnNameArr[j]
          .split(" ")
          .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
          .join(" ");
      }
    }
    let field = columnNameArr.join("");
    columnObject.title = columnName;
    columnObject.field = field;
    columns.push(columnObject);
  }
  return columns;
}
