var startdate = new Date("2017-09-05 08:00").getTime();
var enddate = new Date("2018-06-12 08:00").getTime();
var words = "how long will it take until yall realize that these words are going in loop".split(" ");

function writeText() {
  function convertDate(date) {
    padNumbers = n => n < 10 ? "0" + n : n;
    return Math.floor(date.getTime() / 86400000) + " days " + padNumbers(date.getHours()) + ":" + padNumbers(date.getMinutes()) + ":" + padNumbers(date.getSeconds());
  }
  function multiplierDate(date) {
    padNumbers = n => n < 10 ? "0" + n : n;
    return Math.floor(Math.floor(date.getTime() / 86400000) * (5/7));
  }
  var text = `
Time so far:
${convertDate(new Date(new Date().getTime() - startdate))}

Time left:
${convertDate(new Date(enddate - new Date().getTime()))}
${multiplierDate(new Date(enddate - new Date().getTime()))} weekdays

The word of the day is: ${words[Math.floor(new Date().getTime() / 86400000) % words.length]}
`;
  document.getElementById("text").innerText = text;
}

window.onload = function() {
  setInterval(writeText,200);
}
