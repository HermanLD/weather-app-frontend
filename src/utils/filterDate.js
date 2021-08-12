function formatDate(rawDate) {
  let date = new Date(rawDate);
  let dateStr = date.toDateString();
  let dateArr = dateStr.split(" ");
  return `${dateArr[0]}, ${dateArr[2]} ${dateArr[1]}`;
}

module.exports = formatDate;
