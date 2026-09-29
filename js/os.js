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


        /* =================================================
           NORMAL COMMANDS
        ================================================= */

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


        /* =================================================
           SD-001
        ================================================= */

        case "sd-001":

            output.innerHTML += `

                <span class="green">
                CODE VERIFIED
                </span>

                <br>
                ----------------
                <br><br>

                <div class="sd001Document">


                    <div class="sd001TopLine">

                        <span>
                            ARCHIVE RESEARCH DIVISION
                        </span>

                        <span>
                            SD-001
                        </span>

                    </div>


                    <div class="sd001Classification">

                        CLASSIFIED

                    </div>


                    <div class="sd001Header">

                        <div class="sd001SmallTitle">
                            CENTRAL RESEARCH ARCHIVE
                        </div>

                        <h2>
                            THE SIXTH DOOR PROJECT
                        </h2>

                        <div class="sd001DocumentTitle">
                            RESEARCH DOCUMENT — SD-001
                        </div>

                    </div>


                    <div class="sd001Meta">

                        <div>
                            <span>DOCUMENT ID</span>
                            SD-001
                        </div>

                        <div>
                            <span>PROJECT</span>
                            THE SIXTH DOOR
                        </div>

                        <div>
                            <span>SECURITY</span>
                            CLASSIFIED
                        </div>

                        <div>
                            <span>STATUS</span>
                            PARTIALLY RECOVERED
                        </div>

                        <div>
                            <span>ARCHIVE CONDITION</span>
                            DAMAGED
                        </div>

                        <div>
                            <span>RECOVERY DATE</span>
                            [REDACTED]
                        </div>

                    </div>


                    <div class="sd001Divider"></div>


                    <div class="sd001Section">

                        <div class="sd001SectionTitle">
                            RESEARCH NOTE 01
                        </div>

                        <p>
                            The subject continues to respond normally
                            to the testing environment.
                        </p>

                        <p>
                            Initial observations indicate that the
                            subject is capable of completing all
                            assigned tasks without external assistance.
                        </p>

                        <p>
                            No significant physical abnormalities
                            have been recorded at this stage.
                        </p>

                    </div>


                    <div class="sd001Section">

                        <div class="sd001SectionTitle">
                            OBSERVATIONS
                        </div>

                        <p>
                            Several inconsistencies have appeared
                            during the later stages of testing.
                        </p>

                        <p>
                            The subject has reported brief periods
                            of missing information concerning
                            previous events.
                        </p>

                        <p>
                            These reports have not been confirmed
                            by the research personnel.
                        </p>

                    </div>


                    <div class="sd001Internal">

                        <div class="sd001SectionTitle">
                            INTERNAL NOTE
                        </div>

                        <p>
                            Personnel are advised not to question
                            the subject regarding previously
                            completed procedures.
                        </p>

                        <p>
                            Further investigation has been
                            authorized.
                        </p>

                    </div>


                    <div class="sd001Redacted">

                        <div class="sd001SectionTitle">
                            REMOVED INFORMATION
                        </div>

                        <div class="sd001BlackLine">
                            ███████████████████████████████████
                        </div>

                        <div class="sd001BlackLine">
                            ██████████████████████████
                        </div>

                        <div class="sd001BlackLine">
                            ███████████████████████████████████████
                        </div>

                        <div class="sd001RedactedText">
                            INFORMATION WITHHELD BY ARCHIVE AUTHORITY
                        </div>

                    </div>


                    <div class="sd001Damaged">

                        <div class="sd001SectionTitle">
                            DOCUMENT RECOVERY
                        </div>

                        <p>
                            The remainder of this document could not
                            be recovered.
                        </p>

                        <div class="sd001Missing">

                            ───────────────────────────────

                            <br>

                            DOCUMENT CONTINUES — DATA MISSING

                            <br>

                            ───────────────────────────────

                        </div>

                    </div>


                    <div class="sd001Footer">

                        <span>
                            ARCHIVE COPY — SD-001
                        </span>

                        <span>
                            PAGE 01 / 03
                        </span>

                    </div>


                    <div class="sd001FooterWarning">

                        UNAUTHORIZED DUPLICATION PROHIBITED

                    </div>


                </div>

                <br><br>

            `;

        break;


        /* =================================================
           SD-002
        ================================================= */

        case "sd-002":

            output.innerHTML += `

                <span class="green">
                    CODE VERIFIED
                </span>

                <br>
                ----------------
                <br><br>

                <div class="sd002File">


                    <!-- HEADER -->

                    <div class="sd002TopLine">

                        <span>
                            CENTRAL AUDIO ARCHIVE
                        </span>

                        <span>
                            SD-002
                        </span>

                    </div>


                    <div class="sd002Classification">

                        CLASSIFIED

                    </div>


                    <div class="sd002Header">

                        <div class="sd002SmallTitle">
                            ARCHIVE RECORDING DIVISION
                        </div>

                        <h2>
                            RECOVERED AUDIO LOG
                        </h2>

                        <div class="sd002DocumentTitle">
                            AUDIO RECORD — SD-002
                        </div>

                    </div>


                    <!-- METADATA -->

                    <div class="sd002Meta">

                        <div>
                            <span>FILE ID</span>
                            SD-002
                        </div>

                        <div>
                            <span>PROJECT</span>
                            THE SIXTH DOOR
                        </div>

                        <div>
                            <span>FILE TYPE</span>
                            AUDIO LOG
                        </div>

                        <div>
                            <span>SECURITY</span>
                            CLASSIFIED
                        </div>

                        <div>
                            <span>STATUS</span>
                            RECOVERED
                        </div>

                        <div>
                            <span>AUDIO INTEGRITY</span>
                            73%
                        </div>

                    </div>


                    <div class="sd002Divider"></div>


                    <!-- AUDIO RECORDER -->

                    <div
                        class="archivePlayer"
                        id="sd002Player"
                    >


                        <div class="playerHeader">

                            ARCHIVE AUDIO RECORDER — SD-002

                        </div>


                        <!-- RECORDER DISPLAY -->

                        <div class="recorderDisplay">

                            <div class="reel"></div>

                        </div>


                        <!-- WAVEFORM -->

                        <div class="waveform">

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>


                        <!-- AUDIO FILE -->

                        <audio
                            id="sd002Audio"
                            preload="metadata"
                        >

                            <source
                                src="assets/audio/SD-002.mp3"
                                type="audio/mpeg"
                            >

                        </audio>


                        <!-- PROGRESS -->

                        <input
                            type="range"
                            id="sd002Progress"
                            class="playerProgress"
                            value="0"
                            min="0"
                            max="100"
                            step="0.1"
                        >


                        <!-- TIME -->

                        <div class="playerTime">

                            <span id="sd002Current">
                                00:00
                            </span>

                            <span id="sd002Duration">
                                00:00
                            </span>

                        </div>


                        <br>


                        <!-- CONTROLS -->

                        <div class="playerControls">

                            <button
                                onclick="playSD002()"
                            >
                                PLAY
                            </button>

                            <button
                                onclick="pauseSD002()"
                            >
                                PAUSE
                            </button>

                            <button
                                onclick="stopSD002()"
                            >
                                STOP
                            </button>

                        </div>


                        <!-- STATUS -->

                        <div
                            class="playerStatus"
                            id="sd002Status"
                        >

                            AUDIO STATUS:
                            INITIALIZING...

                            <br>

                            AUDIO INTEGRITY:
                            73%

                            <br>

                            RECOVERY STATUS:
                            PARTIAL

                            <br>

                            SOURCE IDENTITY:
                            [REDACTED]

                        </div>


                    </div>


                    <!-- RECOVERY WARNING -->

                    <div class="sd002Warning">

                        <strong>
                            ARCHIVE WARNING
                        </strong>

                        <br><br>

                        This recording was recovered from
                        damaged archive storage.

                        <br><br>

                        Portions of the original recording
                        may be missing or corrupted.

                    </div>


                    <!-- FOOTER -->

                    <div class="sd002Footer">

                        <span>
                            ARCHIVE COPY — SD-002
                        </span>

                        <span>
                            AUDIO RECORD
                        </span>

                    </div>


                </div>

                <br><br>

            `;


            /*
             * The HTML above has now been inserted into
             * terminalOutput, so the audio player can be
             * initialized safely.
             */

            setupSD002();

        break;


        /* =================================================
           SD-003
        ================================================= */

        case "sd-003":

            output.innerHTML += `

                <span class="green">
                    CODE VERIFIED
                </span>

                <br>
                ----------------
                <br><br>

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


        /* =================================================
           SD-004
        ================================================= */

        case "sd-004":

            output.innerHTML += `

                <span class="green">
                    CODE VERIFIED
                </span>

                <br>
                ----------------
                <br><br>

                CLASSIFIED ARCHIVE MESSAGE

                <br><br>

                "The Archive remembers what
                the creator has forgot."

                <br><br>

                SECURITY LEVEL: █████

                <br><br>

            `;

        break;


        /* =================================================
           SECRET CREATOR MESSAGE
        ================================================= */

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

                    I'm the person who created The Sixth Door
                    and built this Archive.

                    <br><br>

                    I wanted to leave something here for the
                    people who were curious enough to look deeper
                    and understand everything.

                    <br><br>

                    You could've just played the game and left.

                    <br><br>

                    But you didn't.

                    <br><br>

                    So... thank you very much.

                    <br><br>

                    Every hidden file, every strange code,
                    every little detail you found was put here
                    for a reason.

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
                    And you don't need to look for some hidden
                    meaning in this message.

                    <br><br>

                    It's just me.

                    <br><br>

                    The actual creator of this project, saying
                    thank you to the people who cared enough to
                    look this far.

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


        /* =================================================
           UNKNOWN COMMAND
        ================================================= */

        default:

            output.innerHTML += `

                Unknown Command

                <br><br>

            `;

    }


    input.value = "";

    output.scrollTop =
        output.scrollHeight;

}


/* =========================================================
   SD-002 AUDIO PLAYER
========================================================= */

function setupSD002(){

    const audio =
        document.getElementById("sd002Audio");

    const progress =
        document.getElementById("sd002Progress");

    const current =
        document.getElementById("sd002Current");

    const duration =
        document.getElementById("sd002Duration");

    const player =
        document.getElementById("sd002Player");

    const status =
        document.getElementById("sd002Status");


    if(
        !audio ||
        !progress ||
        !current ||
        !duration ||
        !player
    ){

        return;

    }


    /* =====================================================
       AUDIO LOADED
    ===================================================== */

    audio.addEventListener(
        "loadedmetadata",
        function(){

            if(
                isFinite(audio.duration) &&
                audio.duration > 0
            ){

                duration.textContent =
                    formatTime(audio.duration);

                if(status){

                    status.innerHTML = `
                        AUDIO STATUS: READY
                        <br>
                        AUDIO INTEGRITY: 73%
                        <br>
                        RECOVERY STATUS: PARTIAL
                        <br>
                        SOURCE IDENTITY: [REDACTED]
                    `;

                }

            }

        }
    );


    /* =====================================================
       AUDIO TIME UPDATE
    ===================================================== */

    audio.addEventListener(
        "timeupdate",
        function(){

            if(!audio.duration) return;


            progress.value =
                (audio.currentTime /
                audio.duration) * 100;


            current.textContent =
                formatTime(audio.currentTime);

        }
    );


    /* =====================================================
       PLAY
    ===================================================== */

    audio.addEventListener(
        "play",
        function(){

            player.classList.add("playing");

            if(status){

                status.innerHTML = `
                    AUDIO STATUS: PLAYING
                    <br>
                    AUDIO INTEGRITY: 73%
                    <br>
                    RECOVERY STATUS: PARTIAL
                    <br>
                    SOURCE IDENTITY: [REDACTED]
                `;

            }

        }
    );


    /* =====================================================
       PAUSE
    ===================================================== */

    audio.addEventListener(
        "pause",
        function(){

            player.classList.remove("playing");

            /*
             * Don't say STOPPED when the user merely
             * pressed pause.
             */

            if(
                audio.currentTime > 0 &&
                audio.currentTime < audio.duration
            ){

                if(status){

                    status.innerHTML = `
                        AUDIO STATUS: PAUSED
                        <br>
                        AUDIO INTEGRITY: 73%
                        <br>
                        RECOVERY STATUS: PARTIAL
                        <br>
                        SOURCE IDENTITY: [REDACTED]
                    `;

                }

            }

        }
    );


    /* =====================================================
       AUDIO ENDED
    ===================================================== */

    audio.addEventListener(
        "ended",
        function(){

            player.classList.remove("playing");

            progress.value = 100;


            if(status){

                status.innerHTML = `
                    AUDIO STATUS: RECORDING COMPLETE
                    <br>
                    AUDIO INTEGRITY: 73%
                    <br>
                    RECOVERY STATUS: PARTIAL
                    <br>
                    SOURCE IDENTITY: [REDACTED]
                `;

            }

        }
    );


    /* =====================================================
       AUDIO ERROR
    ===================================================== */

    audio.addEventListener(
        "error",
        function(){

            player.classList.remove("playing");


            if(status){

                status.innerHTML = `
                    AUDIO STATUS: FILE ERROR
                    <br>
                    SD-002 AUDIO COULD NOT BE RECOVERED
                    <br>
                    CHECK: assets/audio/SD-002.mp3
                `;

            }

        }
    );


    /* =====================================================
       PROGRESS BAR
    ===================================================== */

    progress.addEventListener(
        "input",
        function(){

            if(!audio.duration) return;


            audio.currentTime =
                (progress.value / 100) *
                audio.duration;

        }
    );

}


/* =========================================================
   SD-002 PLAY
========================================================= */

function playSD002(){

    const audio =
        document.getElementById("sd002Audio");

    const status =
        document.getElementById("sd002Status");


    if(!audio){

        return;

    }


    audio.play()
    .then(function(){

        if(status){

            status.innerHTML = `
                AUDIO STATUS: PLAYING
                <br>
                AUDIO INTEGRITY: 73%
                <br>
                RECOVERY STATUS: PARTIAL
                <br>
                SOURCE IDENTITY: [REDACTED]
            `;

        }

    })
    .catch(function(){

        if(status){

            status.innerHTML = `
                AUDIO STATUS: PLAYBACK ERROR
                <br>
                CHECK AUDIO FILE
                <br>
                SOURCE:
                assets/audio/SD-002.mp3
            `;

        }

    });

}


/* =========================================================
   SD-002 PAUSE
========================================================= */

function pauseSD002(){

    const audio =
        document.getElementById("sd002Audio");

    if(!audio) return;

    audio.pause();

}


/* =========================================================
   SD-002 STOP
========================================================= */

function stopSD002(){

    const audio =
        document.getElementById("sd002Audio");

    const progress =
        document.getElementById("sd002Progress");

    const current =
        document.getElementById("sd002Current");

    const status =
        document.getElementById("sd002Status");


    if(audio){

        audio.pause();

        audio.currentTime = 0;

    }


    if(progress){

        progress.value = 0;

    }


    if(current){

        current.textContent = "00:00";

    }


    if(status){

        status.innerHTML = `
            AUDIO STATUS: STOPPED
            <br>
            AUDIO INTEGRITY: 73%
            <br>
            RECOVERY STATUS: PARTIAL
            <br>
            SOURCE IDENTITY: [REDACTED]
        `;

    }


    const player =
        document.getElementById("sd002Player");

    if(player){

        player.classList.remove("playing");

    }

}


/* =========================================================
   AUDIO LOG ARCHIVE
========================================================= */

const audioLogs = {

    "LOG-001":
        "assets/audio/LOG-001.mp3",

    "LOG-002":
        "assets/audio/LOG-002.mp3",

    "LOG-003":
        "assets/audio/LOG-003.mp3",

    "LOG-004":
        "assets/audio/LOG-004.mp3"

};


/* =========================================================
   PLAY ARCHIVE AUDIO LOG
========================================================= */

function playAudioLog(logID){

    const audio =
        document.getElementById("archiveAudio");

    const player =
        document.getElementById("audioPlayer");

    const title =
        document.getElementById("audioPlayerTitle");

    const status =
        document.getElementById("audioPlayerStatus");


    if(!audio || !player) return;


    const file =
        audioLogs[logID];


    if(!file){

        if(status){

            status.textContent =
                "RECORDING FILE NOT FOUND";

        }

        return;

    }


    audio.src = file;

    title.textContent = logID;

    status.textContent =
        "LOADING RECORDING...";


    player.style.display = "block";


    audio.load();


    audio.play()
    .then(function(){

        status.textContent =
            "PLAYING — " + logID;

        startAudioReels();

    })
    .catch(function(){

        status.textContent =
            "READY — PRESS PLAY";

    });

}


/* =========================================================
   ARCHIVE AUDIO PLAY / PAUSE
========================================================= */

function toggleArchiveAudio(){

    const audio =
        document.getElementById("archiveAudio");


    if(!audio) return;


    const status =
        document.getElementById("audioPlayerStatus");


    if(audio.paused){

        audio.play();

        if(status){

            status.textContent =
                "PLAYING";

        }

        startAudioReels();

    }

    else{

        audio.pause();

        if(status){

            status.textContent =
                "PAUSED";

        }

        stopAudioReels();

    }

}


/* =========================================================
   ARCHIVE AUDIO STOP
========================================================= */

function stopArchiveAudio(){

    const audio =
        document.getElementById("archiveAudio");


    if(!audio) return;


    audio.pause();

    audio.currentTime = 0;


    const status =
        document.getElementById("audioPlayerStatus");


    if(status){

        status.textContent =
            "STOPPED";

    }


    stopAudioReels();

}


/* =========================================================
   AUDIO REELS
========================================================= */

function startAudioReels(){

    document
        .querySelectorAll("#audioPlayer .reel")
        .forEach(function(reel){

            reel.classList.add("spinning");

        });

}


function stopAudioReels(){

    document
        .querySelectorAll("#audioPlayer .reel")
        .forEach(function(reel){

            reel.classList.remove("spinning");

        });

}


/* =========================================================
   FORMAT TIME
========================================================= */

function formatTime(seconds){

    if(
        !isFinite(seconds) ||
        seconds < 0
    ){

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


    win.style.zIndex =
        highestZ;

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

document
    .querySelectorAll(".window")
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


setInterval(
    updateClock,
    1000
);


updateClock();