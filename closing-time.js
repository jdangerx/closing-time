const date = new Date();
const isOpen = (date) => {
  const openHours = date.getDay() === 0? [11, 20] : [10, 21];
  const hour = date.getHours();
  return hour >= openHours[0] && hour < openHours[1];
};

if (!isOpen(date)) {
  window.location = browser.runtime.getURL("closed.html");
}
