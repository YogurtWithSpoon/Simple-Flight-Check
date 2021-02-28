// Разибаем число для удобного отображения
export function numberWithThousands(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const monthDic = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "майя",
  "июня",
  "июля",
  "августа",
  "сентябрья",
  "октябрья",
  "ноябрья",
  "декабрья",
];

// Разбиваем строку для отображения формата 2029-03-04
export function showDate(dataString) {
  let array = dataString.split("-");
  return `${Number(array[2])} ${monthDic[Number(array[1]) - 1]}, ${array[0]}`;
}
