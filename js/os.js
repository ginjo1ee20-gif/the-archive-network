function terminalEnter(event){

    if(event.key !== "Enter") return;

    const input = document.getElementById("terminalInput");

    const output = document.getElementById("terminalOutput");

    const cmd = input.value.trim().toLowerCase();

    output.innerHTML += "<br><span>> " + cmd + "</span><br>";

    switch(cmd){

        case "help":

            output.innerHTML += `
Commands Available<br>
----------------<br>
HELP<br>
CLEAR<br>
FILES<br>
LOG-001<br>
CREATOR
<br><br>
`;

        break;

        case "clear":

            output.innerHTML = "";

        break;

        case "files":

            output.innerHTML += `
Research Files Found<br>
FILE-001<br>
FILE-002<br>
FILE-003
<br><br>
`;

        break;

        case "log-001":

            output.innerHTML += `
Recovered File...<br>
Experiment Log 001<br>
Status : Stable
<br><br>
`;

        break;

        case "creator":

            output.innerHTML += `
Searching...
<br><br>
ACCESS DENIED
<br>
Creator record deleted.
<br><br>
`;

        break;

        default:

            output.innerHTML += `
Unknown Command
<br><br>
`;

    }

    input.value="";

    output.scrollTop=output.scrollHeight;

}

var highestZ = 1000;

// Open a window
function openWindow(id) {
    var win = document.getElementById(id);

    if (!win) return;

    win.style.display = "block";
    highestZ++;
    win.style.zIndex = highestZ;
}

// Close a window
function closeWindow(id) {
    var win = document.getElementById(id);

    if (!win) return;

    win.style.display = "none";
}

// Make windows draggable
document.querySelectorAll(".window").forEach(function(windowElement) {

    var titleBar = windowElement.querySelector(".windowTitle");

    var dragging = false;
    var offsetX = 0;
    var offsetY = 0;

    titleBar.addEventListener("mousedown", function(e) {

        dragging = true;

        highestZ++;
        windowElement.style.zIndex = highestZ;

        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;

    });

    document.addEventListener("mousemove", function(e) {

        if (!dragging) return;

        windowElement.style.left = (e.clientX - offsetX) + "px";
        windowElement.style.top = (e.clientY - offsetY) + "px";

    });

    document.addEventListener("mouseup", function() {

        dragging = false;

    });

});

// Live Clock
function updateClock() {

    var clock = document.getElementById("clock");

    if (!clock) return;

    clock.textContent = new Date().toLocaleTimeString();

}

setInterval(updateClock, 1000);
updateClock();