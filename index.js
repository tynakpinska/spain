setInterval(() => {
  let today = new Date();
  const spain = new Date("October 1, 2020 00:00:00");
  let left = spain - today;
  let leftParts = {
    days: Math.floor(left / (1000 * 60 * 60 * 24)),
    hours:
      Math.floor((left / (1000 * 60 * 60)) % 24) > 9
        ? Math.floor((left / (1000 * 60 * 60)) % 24)
        : `0${Math.floor((left / (1000 * 60 * 60)) % 24)}`,
    minutes:
      Math.floor((left / 1000 / 60) % 60) > 9
        ? Math.floor((left / 1000 / 60) % 60)
        : `0${Math.floor((left / 1000 / 60) % 60)}`,
    seconds:
      Math.floor((left / 1000) % 60) > 9
        ? Math.floor((left / 1000) % 60)
        : `0${Math.floor((left / 1000) % 60)}`,
  };

  const days = document.getElementById("d");
  const hours = document.getElementById("h");
  const minutes = document.getElementById("m");
  const seconds = document.getElementById("s");

  days.innerHTML = leftParts.days;
  hours.innerHTML = leftParts.hours;
  minutes.innerHTML = leftParts.minutes;
  seconds.innerHTML = leftParts.seconds;
}, 1000);
