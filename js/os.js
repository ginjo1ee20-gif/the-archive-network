/* =========================================================
   ARCHIVE OS
========================================================= */


/* =========================================================
   BOOT SEQUENCE
========================================================= */

document.addEventListener("DOMContentLoaded", function(){

    const bootScreen = document.getElementById("bootScreen");
    const bootLines = document.getElementById("bootLines");

    if(!bootScreen || !bootLines) return;

    const lines = [

        "CENTRAL RECORDING SYSTEM",
        "INITIALIZING MEMORY BANKS........ OK",
        "CHECKING ARCHIVE RECORDS......... OK",
        "CHECKING SERVER CONNECTION....... OK",
        "CHECKING SECURITY NETWORK........ OK",
        "CHECKING CAMERA NETWORK.......... OK",
        "CHECKING AUDIO ARCHIVES.......... OK",
        "CHECKING PERSONNEL DATABASE...... OK",
        "SYSTEM INTEGRITY................. STABLE",
        "",
        "ARCHIVE OS READY"

    ];

    let index = 0;

    function writeLine(){

        if(index >= lines.length){

            setTimeout(function(){

                bootScreen.style.opacity = "0";
                bootScreen.style.transition = "opacity .8s";

                setTimeout(function(){

                    bootScreen.style.display = "none";

                },800);

            },700);

            return;
        }

        const line = document.createElement("p");

        line.textContent = lines[index];

        bootLines.appendChild(line);

        index++;

        setTimeout(writeLine,230);

    }

    writeLine();

});


/* =========================================================
   TERMINAL
========================================================= */

function terminalEnter(event){

    if(event.key !== "Enter") return;

    const input = document.getElementById("terminalInput");
    const output = document.getElementById("terminalOutput");

    if(!input || !output) return;

    const cmd = input.value.trim().toLowerCase();

    if(cmd === "") return;

    output.innerHTML +=
        "<br><span>&gt; " + cmd + "</span><br>";


    switch(cmd){


        /* =========================
           NORMAL COMMANDS
        ========================= */

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


        /* =========================
           SD-001
        ========================= */

        case "sd-001":

            output.innerHTML += `

            <span class="green">
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
                border:1px solid #665a42;
            ">

            <br>

            `;

        break;


        /* =========================
           SD-002
        ========================= */

        case "sd-002":

            output.innerHTML += `

            <span class="green">
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


            <div class="archivePlayer" id="sd002Player">

                <div class="playerHeader">
                    ARCHIVE AUDIO RECORDER — SD-002
                </div>


                <div class="recorderDisplay">

                    <div class="reel"></div>

                </div>


                <div class="waveform">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>


                <audio
                    id="sd002Audio"
                    preload="metadata">

                    <source
                    src="assets/audio/SD-002.mp3"
                    type="audio/mpeg">

                </audio>


                <input
                    type="range"
                    id="sd002Progress"
                    class="playerProgress"
                    value="0"
                    min="0"
                    max="100">


                <div class="playerTime">

                    <span id="sd002Current">
                        00:00
                    </span>

                    <span id="sd002Duration">
                        00:00
                    </span>

                </div>


                <br>


                <div class="playerControls">

                    <button onclick="playSD002()">
                        PLAY
                    </button>

                    <button onclick="pauseSD002()">
                        PAUSE
                    </button>

                    <button onclick="stopSD002()">
                        STOP
                    </button>

                </div>


                <div class="playerStatus">

                    AUDIO INTEGRITY: 73%<br>
                    RECOVERY STATUS: PARTIAL<br>
                    SOURCE IDENTITY: [REDACTED]

                </div>

            </div>

            <br><br>

            `;

            setupSD002();

        break;


        /* =========================
           SD-003
        ========================= */

        case "sd-003":

            output.innerHTML += `

            <span class="green">
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


        /* =========================
           SD-004
        ========================= */

        case "sd-004":

            output.innerHTML += `

            <span class="green">
            CODE VERIFIED
            </span>

            <br>
            ----------------
            <br>

            CLASSIFIED ARCHIVE MESSAGE

            <br><br>

            "The Archive remembers what
            the creator has forgot."

            <br><br>

            SECURITY LEVEL: █████

            <br><br>

            `;

        break;


        case "creator-1.00.4.6/real":

    output.innerHTML += `
    <br>

    <div style="
        border:1px solid #C9A227;
        padding:25px;
        margin-top:15px;
        background:#080706;
        color:#EAEAEA;
        line-height:1.8;
        font-family:'IBM Plex Mono', monospace;
    ">

        <div style="
            color:#C9A227;
            text-align:center;
            margin-bottom:25px;
            letter-spacing:2px;
        ">
            [ PRIVATE CREATOR MESSAGE ]
        </div>

        Hey dear genius.
        <br><br>

        If you're reading this, you actually found it.
        <br><br>

        This isn't part of the story.
        <br>
        It's not another experiment.
        <br>
        And it's not some secret character.
        <br><br>

        It's me. The creator.
        <br><br>

        I'm the person who created The Sixth Door and built this Archive.
        <br><br>

        I wanted to leave something here for the people who were curious enough to look deeper and understand everything.
        <br><br>

        You could've just played the game and left.
        <br><br>

        But you didn't.
        <br><br>

        So... thank you very much.
        <br><br>

        Every hidden file, every strange code, every little detail you found was put here for a reason.
        <br><br>

        And somehow, you found your way to this one.
        <br><br>

        And just to make some things clear:
        <br><br>

        This message is real.
        <br><br>

        I'm not a character in the story.
        <br>
        This isn't part of the lore.
        <br>
        And you don't need to look for some hidden meaning in this message.
        <br><br>

        It's just me.
        <br><br>

        The actual creator of this project, saying thank you to the people who cared enough to look this far.
        <br><br>

        There isn't anything else you need to do here.
        <br><br>

        You found me.
        <br><br>

        Thank you for playing The Sixth Door.
        <br><br>

        And thank you for being curious.
        <br><br>

        <span style="color:#C9A227;">
            Iyad Mutwakill
        </span>
        <br>
        Creator of Project: The Sixth Door

    </div>

    <br><br>
    `;

break;
        /* =========================
           UNKNOWN
        ========================= */

        default:

            output.innerHTML += `
            Unknown Command
            <br><br>
            `;

    }


    input.value = "";

    output.scrollTop = output.scrollHeight;

}


/* =========================================================
   SD-002 AUDIO PLAYER
========================================================= */

function setupSD002(){

    const audio = document.getElementById("sd002Audio");
    const progress = document.getElementById("sd002Progress");
    const current = document.getElementById("sd002Current");
    const duration = document.getElementById("sd002Duration");
    const player = document.getElementById("sd002Player");

    if(
        !audio ||
        !progress ||
        !current ||
        !duration ||
        !player
    ) return;


    audio.addEventListener("loadedmetadata", function(){

        duration.textContent =
            formatTime(audio.duration);

    });


    audio.addEventListener("timeupdate", function(){

        if(!audio.duration) return;

        progress.value =
            (audio.currentTime / audio.duration) * 100;

        current.textContent =
            formatTime(audio.currentTime);

    });


    audio.addEventListener("play", function(){

        player.classList.add("playing");

    });


    audio.addEventListener("pause", function(){

        player.classList.remove("playing");

    });


    audio.addEventListener("ended", function(){

        player.classList.remove("playing");

        progress.value = 100;

    });


    progress.addEventListener("input", function(){

        if(!audio.duration) return;

        audio.currentTime =
            (progress.value / 100) * audio.duration;

    });

}


function playSD002(){

    const audio =
        document.getElementById("sd002Audio");

    if(audio){

        audio.play();

    }

}


function pauseSD002(){

    const audio =
        document.getElementById("sd002Audio");

    if(audio){

        audio.pause();

    }

}


function stopSD002(){

    const audio =
        document.getElementById("sd002Audio");

    const progress =
        document.getElementById("sd002Progress");

    if(audio){

        audio.pause();

        audio.currentTime = 0;

    }

    if(progress){

        progress.value = 0;

    }

}


function formatTime(seconds){

    if(!seconds || isNaN(seconds)){

        return "00:00";

    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return (
        String(minutes).padStart(2,"0")
        + ":" +
        String(secs).padStart(2,"0")
    );

}


/* =========================================================
   WINDOW Z-INDEX SYSTEM
========================================================= */

var highestZ = 1000;


function openWindow(id){

    var win =
        document.getElementById(id);

    if(!win) return;

    win.style.display = "block";

    highestZ++;

    win.style.zIndex = highestZ;

}


function closeWindow(id){

    var win =
        document.getElementById(id);

    if(!win) return;

    win.style.display = "none";

}


/* =========================================================
   DRAGGABLE WINDOWS
========================================================= */

document.querySelectorAll(".window")
.forEach(function(windowElement){

    var titleBar =
        windowElement.querySelector(".windowTitle");

    if(!titleBar) return;

    var dragging = false;

    var offsetX = 0;
    var offsetY = 0;


    titleBar.addEventListener(
        "mousedown",
        function(e){

            dragging = true;

            highestZ++;

            windowElement.style.zIndex =
                highestZ;

            offsetX =
                e.clientX -
                windowElement.offsetLeft;

            offsetY =
                e.clientY -
                windowElement.offsetTop;

        }
    );


    document.addEventListener(
        "mousemove",
        function(e){

            if(!dragging) return;

            windowElement.style.left =
                (e.clientX - offsetX) + "px";

            windowElement.style.top =
                (e.clientY - offsetY) + "px";

        }
    );


    document.addEventListener(
        "mouseup",
        function(){

            dragging = false;

        }
    );

});


/* =========================================================
   CLOCK
========================================================= */

function updateClock(){

    var clock =
        document.getElementById("clock");

    if(!clock) return;

    clock.textContent =
        new Date().toLocaleTimeString();

}


setInterval(updateClock,1000);

updateClock();