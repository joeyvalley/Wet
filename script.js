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

// Links for all the albums.
const lbr = document.getElementById("lbr-link");
lbr.addEventListener("click", () => {
  window.open("http://li.sten.to/do9ix45n");
})
lbr?.addEventListener("mouseover", () => {
  lbr.style.mixBlendMode = "difference";
})
lbr?.addEventListener("mouseout", () => {
  lbr.style.mixBlendMode = "exclusion";
})

const pr = document.getElementById("pr-link");
pr.addEventListener("click", () => {
  window.open("http://li.sten.to/sl3s5nu1");
})
pr?.addEventListener("mouseover", () => {
  pr.style.mixBlendMode = "difference";
})
pr?.addEventListener("mouseout", () => {
  pr.style.mixBlendMode = "exclusion";
})

const lb = document.getElementById("lb-link");
lb.addEventListener("click", () => {
  window.open("https://wet.ffm.to/letterblue");
})
lb?.addEventListener("mouseover", () => {
  lb.style.mixBlendMode = "difference";
})
lb?.addEventListener("mouseout", () => {
  lb.style.mixBlendMode = "exclusion";
})

const tf = document.getElementById("tf-link");
tf.addEventListener("click", () => {
  window.open("http://li.sten.to/kUUK4b6");
})
tf?.addEventListener("mouseover", () => {
  tf.style.mixBlendMode = "difference";
})
tf?.addEventListener("mouseout", () => {
  tf.style.mixBlendMode = "exclusion";
})

const ob = document.getElementById("ob-link");
ob.addEventListener("click", () => {
  window.open("http://li.sten.to/USXnYiV");
})
ob?.addEventListener("mouseover", () => {
  ob.style.mixBlendMode = "difference";
})
ob?.addEventListener("mouseout", () => {
  ob.style.mixBlendMode = "exclusion";
})

const ss = document.getElementById("ss-link");
ss.addEventListener("click", () => {
  window.open("https://allwet.bandcamp.com/album/single-sound");
})
ss?.addEventListener("mouseover", () => {
  ss.style.mixBlendMode = "difference";
})
ss?.addEventListener("mouseout", () => {
  ss.style.mixBlendMode = "exclusion";
})

const sr = document.getElementById("sr-link");
sr.addEventListener("click", () => {
  window.open("http://li.sten.to/QjI5Zo8");
})
sr?.addEventListener("mouseover", () => {
  sr.style.mixBlendMode = "difference";
})
sr?.addEventListener("mouseout", () => {
  sr.style.mixBlendMode = "exclusion";
})

const tmta = document.getElementById("tmta-link");
tmta.addEventListener("click", () => {
  window.open("http://li.sten.to/S5ofp2p");
})
tmta?.addEventListener("mouseover", () => {
  tmta.style.mixBlendMode = "difference";
})
tmta?.addEventListener("mouseout", () => {
  tmta.style.mixBlendMode = "exclusion";
})

const dy = document.getElementById("dy-link");
dy.addEventListener("click", () => {
  window.open("http://li.sten.to/BJJlmaX", "_blank");
})
dy?.addEventListener("mouseover", () => {
  dy.style.mixBlendMode = "difference";
})
dy?.addEventListener("mouseout", () => {
  dy.style.mixBlendMode = "exclusion";
})

const ep = document.getElementById("ep-link");
ep?.addEventListener("click", () => {
  window.open("http://li.sten.to/uM72qSv");
})
ep?.addEventListener("mouseover", () => {
  ep.style.mixBlendMode = "difference";
})
ep?.addEventListener("mouseout", () => {
  ep.style.mixBlendMode = "exclusion";
})