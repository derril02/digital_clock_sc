// Fungsi untuk menggerakkan elemen .clock secara acak
function moveClockRandomly() {
  const clock = document.querySelector(".clock");
  const bodyWidth = document.body.clientWidth - clock.offsetWidth;
  const bodyHeight = document.body.clientHeight - clock.offsetHeight;

  const randomX = Math.random() * bodyWidth;
  const randomY = Math.random() * bodyHeight;

  clock.style.left = `${randomX}px`;
  clock.style.top = `${randomY}px`;
}

// Menggerakkan elemen .clock secara acak setiap 2 detik
setInterval(moveClockRandomly, 2000);

// Menetapkan style left dan top ke posisi awal saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const clock = document.querySelector(".clock");
  clock.style.left = `${(window.innerWidth - clock.offsetWidth) / 2}px`;
  clock.style.top = `${(window.innerHeight - clock.offsetHeight) / 2}px`;
});

// Fungsi untuk mengupdate jam digital dan tanggal
function updateClock() {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateTimeString = now.toLocaleDateString(undefined, options);

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("time").textContent = timeString;
  document.getElementById("date").textContent = dateTimeString;
}

// Pertama kali pemanggilan updateClock
updateClock();

// Mengupdate jam digital dan tanggal setiap detik
setInterval(updateClock, 1000);

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateColors() {
  const timeColor = randomColor();
  const dateColor = randomColor();

  timeElement.style.color = timeColor;
  dateElement.style.color = dateColor;
}

setInterval(updateColors, 5000);

const clockElement = document.querySelector(".clock");

function randomBackgroundColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateBackgroundColor() {
  const newColor = randomBackgroundColor();
  clockElement.style.backgroundColor = newColor;
}

setInterval(updateBackgroundColor, 1000);
