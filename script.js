function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourFirstDigit = Math.floor(hours / 10);
  const hourSecondDigit = hours % 10;

  const minuteFirstDigit = Math.floor(minutes / 10);
  const minuteSecondDigit = minutes % 10;

  const secondFirstDigit = Math.floor(seconds / 10);
  const secondSecondDigit = seconds % 10;

  document.querySelector(".hrs_f .box").textContent = hourFirstDigit;
  document.querySelector(".hrs_s .box").textContent = hourSecondDigit;

  document.querySelector(".mins_f .box").textContent = minuteFirstDigit;
  document.querySelector(".mins_s .box").textContent = minuteSecondDigit;

  document.querySelector(".sec_f .box").textContent = secondFirstDigit;
  document.querySelector(".sec_s .box").textContent = secondSecondDigit;
}

updateTime();
setInterval(updateTime, 1000);
