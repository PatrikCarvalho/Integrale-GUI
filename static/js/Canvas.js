// Drawing a Canvis
function initCanvas() {
    var ctx = document.getElementById("my_canvas").getContext("2d");
    ctx.canvas.addEventListener("mousemove", function (event) {
        const offsetX = 319;
        const offsetY = 153;
        var mouseX = event.clientX - offsetX;
        var mouseY = event.clientY - offsetY;
        var status = document.getElementById("status");
        status.innerHTML = mouseX + " | " + mouseY;
    });
    ctx.canvas.addEventListener("click", function (event) {
        const offsetX = 319;
        const offsetY = 153;
        var mouseX = event.clientX - offsetX;
        var mouseY = event.clientY - offsetY;
        // alert(mouseX+" | "+mouseY);
        ctx.fillStyle = "orange";
        ctx.fillRect(mouseX, mouseY, 30, 30);
    });
};

window.addEventListener("load", function (event) {
    initCanvas();
});