setDate();
startTime();

// Set the date.
function setDate() {
  const today = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
  const dateHTML = document.getElementById("date");
  dateHTML.innerText = date;
}
// Set the time.
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let AMPM = "AM";
  if (h > 12) { h = h - 12; AMPM = "PM"; }
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerText = h + ":" + m + ":" + s + " " + AMPM;
  setTimeout(startTime, 1000);
}

// Format the clock times.
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}