function terminalEnter(event){

    if(event.key !== "Enter") return;

    const input = document.getElementById("terminalInput");
    const output = document.getElementById("terminalOutput");

    const cmd = input.value.trim().toLowerCase();

    if(cmd === "") return;

    output.innerHTML += "<br><span>> " + cmd + "</span><br>";

    switch(cmd){

        // =========================
        // NORMAL COMMANDS
        // =========================

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


        // =========================
        // SECRET ARCHIVE CODES
        // =========================

        case "sd-001":

    output.innerHTML += `
    <span style="color:#00FFB3;">
    CODE VERIFIED
    </span>
    <br>
    ----------------
    <br>
    CLASSIFIED FILE SD-001
    <br><br>
    ARCHIVE STATUS: UNLOCKED
    <br>
    FILE TYPE: RESEARCH DATA
    <br>
    SECURITY LEVEL: CLASSIFIED
    <br><br>

    <img 
        src="assets/images/SD-001.png"
        alt="SD-001 Classified Research Dossier"
        style="
            width:100%;
            max-width:700px;
            display:block;
            margin:20px auto;
            border:1px solid #00FFB3;
        "
    >

    <br>
    `;

break;


        case "sd-002":

    output.innerHTML += `
    <span style="color:#00FFB3;">
    CODE VERIFIED
    </span>
    <br>
    ----------------
    <br>
    CLASSIFIED FILE SD-002
    <br><br>
    ARCHIVE STATUS: UNLOCKED
    <br>
    FILE TYPE: AUDIO LOG
    <br>
    SECURITY LEVEL: CLASSIFIED
    <br>
    AUDIO STATUS: RECOVERED
    <br><br>

    <div style="
        border:1px solid #00FFB3;
        padding:15px;
        margin-top:10px;
        background:#050505;
    ">

        <span style="color:#00FFB3;">
        ▶ SD-002 — RECOVERED AUDIO LOG
        </span>

        <br><br>

        <audio controls style="width:100%;">
            <source src="assets/audio/SD-002.mp3" type="audio/mpeg">
            Your browser does not support the audio player.
        </audio>

        <br><br>

        <span style="color:#888;">
        AUDIO INTEGRITY: 73%<br>
        RECOVERY STATUS: PARTIAL<br>
        SOURCE IDENTITY: [REDACTED]
        </span>

    </div>

    <br><br>
    `;

break;


        case "sd-003":

            output.innerHTML += `
            <span style="color:#00FFB3;">
            CODE VERIFIED
            </span>
            <br>
            ----------------
            <br>
            CLASSIFIED FILE SD-003
            <br><br>
            ARCHIVE STATUS: UNLOCKED
            <br>
            FILE TYPE: VIDEO
            <br>
            SECURITY LEVEL: CLASSIFIED
            <br><br>
            [ VIDEO FILE PLACEHOLDER ]
            <br><br>
            `;

        break;


        case "sd-004":

            output.innerHTML += `
            <span style="color:#00FFB3;">
            CODE VERIFIED
            </span>
            <br>
            ----------------
            <br>
            CLASSIFIED ARCHIVE MESSAGE
            <br><br>
            "The Archive remembers what
            the creator forgot."
            <br><br>
            SECURITY LEVEL: █████
            <br><br>
            `;

        break;


        // =========================
        // UNKNOWN COMMAND
        // =========================

        default:

            output.innerHTML += `
            Unknown Command
            <br><br>
            `;

    }

    input.value = "";

    output.scrollTop = output.scrollHeight;

}


// =================================
// WINDOW Z-INDEX SYSTEM
// =================================

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


// =================================
// MAKE WINDOWS DRAGGABLE
// =================================

document.querySelectorAll(".window").forEach(function(windowElement) {

    var titleBar = windowElement.querySelector(".windowTitle");

    if (!titleBar) return;

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

        windowElement.style.left =
            (e.clientX - offsetX) + "px";

        windowElement.style.top =
            (e.clientY - offsetY) + "px";

    });


    document.addEventListener("mouseup", function() {

        dragging = false;

    });

});


// =================================
// LIVE CLOCK
// =================================

function updateClock() {

    var clock = document.getElementById("clock");

    if (!clock) return;

    clock.textContent =
        new Date().toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();