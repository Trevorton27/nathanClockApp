function showTime() {
  const theTime = new Date();

  const hour = theTime.getHours();
  const minutes = addLeadingZero(theTime.getMinutes());
  const seconds = addLeadingZero(theTime.getSeconds());
  const isAm = hour < 12 || hour === 0;
  let amPm = isAm ? 'AM' : 'PM';

  document.getElementById('time').textContent = `${formatHour(
    hour
  )}:${minutes}:${seconds} ${amPm}`;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function showDate() {
  const theDate = new Date();

  const day = days[theDate.getDay()];
  const month = months[theDate.getMonth()];
  const dateToday = theDate.getDate();
  const year = theDate.getFullYear();

  document.getElementById(
    'date'
  ).innerText = `${day}, ${month} ${formatDateSuffix(dateToday)} ${year}`;
}

function formatDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

showTime();
showDate();

setInterval(() => {
  showTime();
  showDate();
}, 1000);
