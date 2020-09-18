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

// Drawing a Canvis
function initCanvas() {
  var ctx = document.getElementById("my_canvas").getContext("2d");
  ctx.canvas.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var status = document.getElementById("status");
    status.innerHTML = mouseX + " | " + mouseY;
  });
}

window.addEventListener("load", function (event) {
  initCanvas();
});
