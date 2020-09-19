// Regulating navbar active
const currentLocation = location.href;
const listItem = document.querySelectorAll("li");
const listLinks = document.querySelectorAll("a");
const linkLength = listLinks.length;
var i;
for (i = 0; i < linkLength; i++) {
  if (listLinks[i].href === currentLocation) {
    listItem[i - 1].className = "nav-item active";
  }
}