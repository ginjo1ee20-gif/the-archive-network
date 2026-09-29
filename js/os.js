/* =========================================================
   ARCHIVE OS v2.0
   The Archive Network
   ========================================================= */


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let highestZ = 100;

let sd002Audio = null;
let sd002Timer = null;

let archiveAudio = null;
let archiveAudioTimer = null;


/* =========================================================
   PAGE BOOT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    startBootSequence();

    setupClock();

    setupWindows();

    setupSD002();

    setupArchiveAudio();

});


/* =========================================================
   BOOT SEQUENCE
   ========================================================= */

function startBootSequence() {

    const bootScreen = document.getElementById("bootScreen");
    const bootLines = document.getElementById("bootLines");
    const mainDesktop = document.getElementById("mainDesktop");

    if (!bootScreen || !bootLines || !mainDesktop) {
        return;
    }

    const lines = [
        "ARCHIVE OS v2.0",
        "THE ARCHIVE NETWORK",
        "",
        "INITIALIZING ARCHIVE CORE...",
        "CHECKING MEMORY SYSTEM...",
        "CHECKING ARCHIVE DATABASE...",
        "CHECKING SECURITY NETWORK...",
        "CHECKING CAMERA NETWORK...",
        "CHECKING AUDIO ARCHIVES...",
        "CHECKING RESEARCH FILES...",
        "",
        "ARCHIVE NETWORK STATUS : STABLE",
        "",
        "LOADING DESKTOP..."
    ];

    let index = 0;

    bootLines.innerHTML = "";

    const interval = setInterval(function () {

        if (index >= lines.length) {

            clearInterval(interval);

            setTimeout(function () {

                bootScreen.style.opacity = "0";

                setTimeout(function () {

                    bootScreen.style.display = "none";
                    mainDesktop.style.display = "block";

                }, 500);

            }, 500);

            return;
        }

        const line = document.createElement("div");

        line.textContent = lines[index];

        bootLines.appendChild(line);

        index++;

    }, 90);
}


/* =========================================================
   CLOCK
   ========================================================= */

function setupClock() {

    const clock = document.getElementById("clock");

    if (!clock) {
        return;
    }

    function updateClock() {

        const now = new Date();

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        clock.textContent =
            hours + ":" +
            minutes + ":" +
            seconds;
    }

    updateClock();

    setInterval(updateClock, 1000);
}


/* =========================================================
   WINDOW SYSTEM
   ========================================================= */

function setupWindows() {

    const windows = document.querySelectorAll(".window");

    windows.forEach(function (windowElement) {

        windowElement.addEventListener("mousedown", function () {

            bringToFront(windowElement);

        });

    });
}


function bringToFront(element) {

    if (!element) {
        return;
    }

    highestZ++;

    element.style.zIndex = highestZ;
}


/* =========================================================
   OPEN WINDOW
   ========================================================= */

function openWindow(id) {

    const windowElement = document.getElementById(id);

    if (!windowElement) {
        return;
    }

    windowElement.style.display = "block";

    bringToFront(windowElement);
}


/* =========================================================
   CLOSE WINDOW
   ========================================================= */

function closeWindow(id) {

    const windowElement = document.getElementById(id);

    if (!windowElement) {
        return;
    }

    windowElement.style.display = "none";
}


/* =========================================================
   TERMINAL
   ========================================================= */

function terminalEnter(event) {

    if (event.key !== "Enter") {
        return;
    }

    const input = document.getElementById("terminalInput");
    const output = document.getElementById("terminalOutput");

    if (!input || !output) {
        return;
    }

    const command = input.value.trim().toLowerCase();

    if (command === "") {
        return;
    }

    output.innerHTML +=
        "<div>> " + escapeHTML(command) + "</div>";

    input.value = "";


    /* HELP */

    if (command === "help") {

        output.innerHTML += `
            <div>
                AVAILABLE COMMANDS:
            </div>

            <div>
                HELP
            </div>

            <div>
                CLEAR
            </div>

            <div>
                FILES
            </div>

            <div>
                LOG-001
            </div>

            <div>
                CREATOR
            </div>

            <div>
                SD-001
            </div>

            <div>
                SD-002
            </div>

            <div>
                SD-003
            </div>

            <div>
                SD-004
            </div>
        `;

        scrollTerminal(output);

        return;
    }


    /* CLEAR */

    if (command === "clear") {

        output.innerHTML = "";

        scrollTerminal(output);

        return;
    }


    /* FILES */

    if (command === "files") {

        output.innerHTML += `
            <div>ARCHIVE FILE INDEX</div>
            <div>-------------------</div>
            <div>FILE-001 : RESEARCH NOTES</div>
            <div>FILE-002 : PERSONNEL RECORDS</div>
            <div>FILE-003 : SECURITY ARCHIVE</div>
            <div>SD-001 : RECOVERED DOCUMENT</div>
            <div>SD-002 : AUDIO LOG</div>
            <div>SD-003 : VIDEO RECORD</div>
            <div>SD-004 : CLASSIFIED MESSAGE</div>
        `;

        scrollTerminal(output);

        return;
    }


    /* LOG-001 */

    if (command === "log-001") {

        output.innerHTML += `
            <div>RECOVERED FILE...</div>
            <div>EXPERIMENT LOG 001</div>
            <div>STATUS : STABLE</div>
        `;

        scrollTerminal(output);

        return;
    }


    /* CREATOR */

    if (command === "creator") {

        output.innerHTML += `
            <div>SEARCHING...</div>
            <div>ACCESS DENIED</div>
            <div>CREATOR RECORD DELETED.</div>
        `;

        scrollTerminal(output);

        return;
    }


    /* SD-001 */

    if (command === "sd-001") {

        showSD001(output);

        scrollTerminal(output);

        return;
    }


    /* SD-002 */

    if (command === "sd-002") {

        showSD002(output);

        scrollTerminal(output);

        return;
    }


    /* SD-003 */

    if (command === "sd-003") {

        output.innerHTML += `
            <div class="sd003Terminal">

                <div class="sd003Header">
                    SD-003
                </div>

                <div class="sd003Status">
                    VIDEO RECORD
                </div>

                <div>
                    CLASSIFICATION : RESTRICTED
                </div>

                <div>
                    STATUS : PARTIALLY RECOVERED
                </div>

                <br>

                <div>
                    VIDEO ARCHIVE DETECTED.
                </div>

                <div>
                    PLAYBACK INTERFACE NOT AVAILABLE.
                </div>

                <div>
                    ADDITIONAL SECURITY CLEARANCE REQUIRED.
                </div>

            </div>
        `;

        scrollTerminal(output);

        return;
    }


    /* SD-004 */

    if (command === "sd-004") {

        output.innerHTML += `
            <div class="sd004Terminal">

                <div>
                    SD-004
                </div>

                <div>
                    CLASSIFICATION : TOP SECRET
                </div>

                <div>
                    STATUS : CORRUPTED
                </div>

                <br>

                <div>
                    MESSAGE CONTENT UNAVAILABLE.
                </div>

                <div>
                    ARCHIVE RECOVERY REQUIRED.
                </div>

            </div>
        `;

        scrollTerminal(output);

        return;
    }


    /* UNKNOWN COMMAND */

    output.innerHTML += `
        <div>
            COMMAND NOT RECOGNIZED.
        </div>

        <div>
            TYPE HELP FOR AVAILABLE COMMANDS.
        </div>
    `;

    scrollTerminal(output);
}


/* =========================================================
   TERMINAL SCROLL
   ========================================================= */

function scrollTerminal(output) {

    if (!output) {
        return;
    }

    setTimeout(function () {

        output.scrollTop = output.scrollHeight;

    }, 20);
}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   SD-001
   ========================================================= */

function showSD001(output) {

    output.innerHTML += `

        <div class="sd001Document">

            <div class="sd001Header">
                SD-001
            </div>

            <div class="sd001Classification">
                THE SIXTH DOOR PROJECT
            </div>

            <div class="sd001Warning">
                CLASSIFICATION: RESTRICTED
            </div>

            <div class="sd001Status">
                STATUS: PARTIALLY RECOVERED
            </div>

            <hr>

            <div class="sd001Section">
                ARCHIVE RECOVERY REPORT
            </div>

            <p>
                File recovered from damaged project storage.
            </p>

            <p>
                Several sections of the original document
                are missing or corrupted.
            </p>

            <p>
                Project designation confirmed as
                <strong>THE SIXTH DOOR</strong>.
            </p>

            <p>
                Purpose of project remains unclear.
            </p>

            <p>
                Personnel records indicate the project involved
                experimental systems, controlled testing and
                restricted observation.
            </p>

            <br>

            <div class="sd001Redacted">
                █████████████████████████
            </div>

            <p>
                Further information has been removed
                from this archive.
            </p>

            <p>
                Recovery reference:
                SD-001
            </p>

            <hr>

            <div class="sd001Footer">
                ARCHIVE NETWORK
                <br>
                DOCUMENT RECOVERY SYSTEM
            </div>

        </div>
    `;
}


/* =========================================================
   SD-002
   IMPORTANT:
   AUDIO IS CREATED WITH JAVASCRIPT.
   NO HTML AUDIO ELEMENT IS REQUIRED.
   ========================================================= */

function showSD002(output) {

    output.innerHTML += `

        <div class="sd002Document">

            <div class="sd002Header">
                SD-002
            </div>

            <div class="sd002Classification">
                THE SIXTH DOOR PROJECT
            </div>

            <div class="sd002Status">
                AUDIO RECORD
            </div>

            <div class="sd002Meta">
                CLASSIFICATION : RESTRICTED
                <br>
                STATUS : RECOVERED
                <br>
                SOURCE : ARCHIVE AUDIO SYSTEM
            </div>

            <hr>

            <div class="sd002Player">

                <div class="sd002PlayerHeader">
                    ARCHIVE AUDIO RECORDER
                </div>

                <div class="sd002ReelArea">

                    <div class="sd002Reel leftReel">
                        ●
                    </div>

                    <div class="sd002Tape">
                        AUDIO TAPE
                    </div>

                    <div class="sd002Reel rightReel">
                        ●
                    </div>

                </div>

                <div class="sd002Time">
                    <span id="sd002CurrentTime">00:00</span>
                    /
                    <span id="sd002Duration">00:00</span>
                </div>

                <input
                    type="range"
                    id="sd002Progress"
                    class="playerProgress"
                    value="0"
                    min="0"
                    max="100"
                    step="0.1"
                >

                <div class="sd002Controls">

                    <button
                        type="button"
                        onclick="playSD002()">
                        PLAY
                    </button>

                    <button
                        type="button"
                        onclick="pauseSD002()">
                        PAUSE
                    </button>

                    <button
                        type="button"
                        onclick="stopSD002()">
                        STOP
                    </button>

                </div>

                <div
                    id="sd002Status"
                    class="sd002AudioStatus">
                    AUDIO STATUS: READY
                </div>

            </div>

            <hr>

            <div class="sd002Notes">

                <div>
                    RECOVERY NOTE
                </div>

                <p>
                    Audio archive recovered from restricted
                    project storage.
                </p>

                <p>
                    Recording integrity:
                    PARTIAL
                </p>

                <p>
                    Original timestamp:
                    UNAVAILABLE
                </p>

            </div>

        </div>

    `;

    setupSD002();
}


/* =========================================================
   SD-002 AUDIO SETUP
   ========================================================= */

function setupSD002() {

    /*
       Destroy any previous SD-002 audio object.
    */

    if (sd002Audio) {

        try {

            sd002Audio.pause();

        } catch (error) {}

        sd002Audio = null;
    }

    /*
       Create the audio directly with JavaScript.
       This avoids the problem where the HTML audio
       element is not appearing correctly.
    */

    sd002Audio = new Audio();

    sd002Audio.preload = "metadata";

    sd002Audio.src = "assets/audio/SD-002.mp3";

    sd002Audio.addEventListener("loadedmetadata", function () {

        updateSD002Duration();

        updateSD002Status(
            "AUDIO STATUS: READY"
        );

    });


    sd002Audio.addEventListener("timeupdate", function () {

        updateSD002Progress();

    });


    sd002Audio.addEventListener("play", function () {

        updateSD002Status(
            "AUDIO STATUS: PLAYING"
        );

        startSD002Reels();

    });


    sd002Audio.addEventListener("pause", function () {

        updateSD002Status(
            "AUDIO STATUS: PAUSED"
        );

        stopSD002Reels();

    });


    sd002Audio.addEventListener("ended", function () {

        updateSD002Status(
            "AUDIO STATUS: PLAYBACK COMPLETE"
        );

        stopSD002Reels();

        const progress =
            document.getElementById("sd002Progress");

        if (progress) {
            progress.value = 100;
        }

    });


    sd002Audio.addEventListener("error", function () {

        updateSD002Status(
            "AUDIO STATUS: FILE ERROR"
        );

        console.error(
            "SD-002 AUDIO ERROR:",
            sd002Audio.error
        );

    });


    const progress =
        document.getElementById("sd002Progress");

    if (progress) {

        progress.addEventListener(
            "input",
            function () {

                seekSD002();

            }
        );
    }


    /*
       Force the browser to load the file.
    */

    sd002Audio.load();
}


/* =========================================================
   SD-002 PLAY
   ========================================================= */

function playSD002() {

    if (!sd002Audio) {

        setupSD002();

    }

    if (!sd002Audio) {
        return;
    }

    updateSD002Status(
        "AUDIO STATUS: LOADING..."
    );

    const playPromise = sd002Audio.play();

    if (playPromise !== undefined) {

        playPromise
            .then(function () {

                updateSD002Status(
                    "AUDIO STATUS: PLAYING"
                );

            })
            .catch(function (error) {

                console.error(
                    "SD-002 PLAY ERROR:",
                    error
                );

                updateSD002Status(
                    "AUDIO STATUS: PLAYBACK ERROR"
                );

            });
    }
}


/* =========================================================
   SD-002 PAUSE
   ========================================================= */

function pauseSD002() {

    if (!sd002Audio) {
        return;
    }

    sd002Audio.pause();

    updateSD002Status(
        "AUDIO STATUS: PAUSED"
    );
}


/* =========================================================
   SD-002 STOP
   ========================================================= */

function stopSD002() {

    if (!sd002Audio) {
        return;
    }

    sd002Audio.pause();

    sd002Audio.currentTime = 0;

    const progress =
        document.getElementById("sd002Progress");

    if (progress) {
        progress.value = 0;
    }

    updateSD002Time();

    updateSD002Status(
        "AUDIO STATUS: STOPPED"
    );

    stopSD002Reels();
}


/* =========================================================
   SD-002 SEEK
   ========================================================= */

function seekSD002() {

    if (!sd002Audio) {
        return;
    }

    if (!isFinite(sd002Audio.duration)) {
        return;
    }

    const progress =
        document.getElementById("sd002Progress");

    if (!progress) {
        return;
    }

    const percentage =
        Number(progress.value) / 100;

    sd002Audio.currentTime =
        sd002Audio.duration * percentage;
}


/* =========================================================
   SD-002 PROGRESS
   ========================================================= */

function updateSD002Progress() {

    if (!sd002Audio) {
        return;
    }

    const progress =
        document.getElementById("sd002Progress");

    if (progress && isFinite(sd002Audio.duration)) {

        progress.value =
            (sd002Audio.currentTime /
            sd002Audio.duration) * 100;
    }

    updateSD002Time();
}


/* =========================================================
   SD-002 TIME
   ========================================================= */

function updateSD002Time() {

    if (!sd002Audio) {
        return;
    }

    const current =
        document.getElementById("sd002CurrentTime");

    const duration =
        document.getElementById("sd002Duration");

    if (current) {

        current.textContent =
            formatAudioTime(
                sd002Audio.currentTime
            );
    }

    if (duration && isFinite(sd002Audio.duration)) {

        duration.textContent =
            formatAudioTime(
                sd002Audio.duration
            );
    }
}


/* =========================================================
   SD-002 DURATION
   ========================================================= */

function updateSD002Duration() {

    if (!sd002Audio) {
        return;
    }

    const duration =
        document.getElementById("sd002Duration");

    if (!duration) {
        return;
    }

    duration.textContent =
        formatAudioTime(
            sd002Audio.duration
        );
}


/* =========================================================
   SD-002 STATUS
   ========================================================= */

function updateSD002Status(message) {

    const status =
        document.getElementById("sd002Status");

    if (!status) {
        return;
    }

    status.textContent = message;
}


/* =========================================================
   AUDIO TIME FORMAT
   ========================================================= */

function formatAudioTime(seconds) {

    if (!isFinite(seconds)) {
        return "00:00";
    }

    seconds = Math.floor(seconds);

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}


/* =========================================================
   SD-002 REEL ANIMATION
   ========================================================= */

function startSD002Reels() {

    const reels =
        document.querySelectorAll(".sd002Reel");

    reels.forEach(function (reel) {

        reel.style.animation =
            "archiveReelSpin 1.2s linear infinite";

    });
}


function stopSD002Reels() {

    const reels =
        document.querySelectorAll(".sd002Reel");

    reels.forEach(function (reel) {

        reel.style.animation = "none";

    });
}


/* =========================================================
   MAIN ARCHIVE AUDIO LOGS
   ========================================================= */

const archiveAudioFiles = {

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
   ARCHIVE AUDIO SETUP
   ========================================================= */

function setupArchiveAudio() {

    archiveAudio = new Audio();

    archiveAudio.preload = "metadata";


    archiveAudio.addEventListener(
        "timeupdate",
        updateArchiveAudioProgress
    );


    archiveAudio.addEventListener(
        "loadedmetadata",
        updateArchiveAudioDuration
    );


    archiveAudio.addEventListener(
        "play",
        function () {

            setArchiveAudioStatus(
                "PLAYING"
            );

        }
    );


    archiveAudio.addEventListener(
        "pause",
        function () {

            setArchiveAudioStatus(
                "PAUSED"
            );

        }
    );


    archiveAudio.addEventListener(
        "ended",
        function () {

            setArchiveAudioStatus(
                "PLAYBACK COMPLETE"
            );

            resetArchiveAudioProgress();

        }
    );


    archiveAudio.addEventListener(
        "error",
        function () {

            setArchiveAudioStatus(
                "AUDIO FILE ERROR"
            );

            console.error(
                "ARCHIVE AUDIO ERROR:",
                archiveAudio.error
            );

        }
    );
}


/* =========================================================
   PLAY ARCHIVE AUDIO
   ========================================================= */

function playArchiveAudio(logID) {

    if (!archiveAudio) {

        setupArchiveAudio();

    }

    const file =
        archiveAudioFiles[logID];

    if (!file) {

        setArchiveAudioStatus(
            "FILE NOT FOUND"
        );

        return;
    }


    /*
       If another audio file is already loaded,
       replace it.
    */

    if (
        archiveAudio.src &&
        !archiveAudio.src.endsWith(file)
    ) {

        archiveAudio.pause();

        archiveAudio.currentTime = 0;

    }


    archiveAudio.src = file;

    archiveAudio.load();

    archiveAudio.play()
        .then(function () {

            setArchiveAudioTitle(logID);

            setArchiveAudioStatus(
                "PLAYING"
            );

        })
        .catch(function (error) {

            console.error(
                "ARCHIVE AUDIO PLAY ERROR:",
                error
            );

            setArchiveAudioStatus(
                "PLAYBACK ERROR"
            );

        });
}


/* =========================================================
   TOGGLE ARCHIVE AUDIO
   ========================================================= */

function toggleArchiveAudio() {

    if (!archiveAudio) {

        setupArchiveAudio();

    }

    if (!archiveAudio.src) {

        setArchiveAudioStatus(
            "NO AUDIO LOADED"
        );

        return;
    }


    if (archiveAudio.paused) {

        archiveAudio.play()
            .then(function () {

                setArchiveAudioStatus(
                    "PLAYING"
                );

            })
            .catch(function () {

                setArchiveAudioStatus(
                    "PLAYBACK ERROR"
                );

            });

    } else {

        archiveAudio.pause();

    }
}


/* =========================================================
   STOP ARCHIVE AUDIO
   ========================================================= */

function stopArchiveAudio() {

    if (!archiveAudio) {
        return;
    }

    archiveAudio.pause();

    archiveAudio.currentTime = 0;

    resetArchiveAudioProgress();

    setArchiveAudioStatus(
        "STOPPED"
    );
}


/* =========================================================
   ARCHIVE AUDIO TITLE
   ========================================================= */

function setArchiveAudioTitle(logID) {

    const title =
        document.getElementById("audioPlayerTitle");

    if (!title) {
        return;
    }

    title.textContent =
        "ARCHIVE AUDIO — " + logID;
}


/* =========================================================
   ARCHIVE AUDIO STATUS
   ========================================================= */

function setArchiveAudioStatus(status) {

    const element =
        document.getElementById("audioPlayerStatus");

    if (!element) {
        return;
    }

    element.textContent =
        "AUDIO STATUS: " + status;
}


/* =========================================================
   ARCHIVE AUDIO PROGRESS
   ========================================================= */

function updateArchiveAudioProgress() {

    if (!archiveAudio) {
        return;
    }

    const progress =
        document.getElementById("archiveAudioProgress");

    if (!progress) {
        return;
    }

    if (!isFinite(archiveAudio.duration)) {
        return;
    }

    progress.value =
        (archiveAudio.currentTime /
        archiveAudio.duration) * 100;
}


/* =========================================================
   ARCHIVE AUDIO DURATION
   ========================================================= */

function updateArchiveAudioDuration() {

    if (!archiveAudio) {
        return;
    }

    const duration =
        document.getElementById("archiveAudioDuration");

    if (!duration) {
        return;
    }

    duration.textContent =
        formatAudioTime(
            archiveAudio.duration
        );
}


/* =========================================================
   RESET ARCHIVE AUDIO
   ========================================================= */

function resetArchiveAudioProgress() {

    const progress =
        document.getElementById("archiveAudioProgress");

    if (progress) {

        progress.value = 0;

    }
}


/* =========================================================
   DRAGGABLE WINDOWS
   ========================================================= */

let draggedWindow = null;

let dragOffsetX = 0;
let dragOffsetY = 0;


document.addEventListener("mousedown", function (event) {

    const titleBar =
        event.target.closest(".windowTitle");

    if (!titleBar) {
        return;
    }

    const windowElement =
        titleBar.closest(".window");

    if (!windowElement) {
        return;
    }

    draggedWindow = windowElement;

    bringToFront(windowElement);

    const rect =
        windowElement.getBoundingClientRect();

    dragOffsetX =
        event.clientX - rect.left;

    dragOffsetY =
        event.clientY - rect.top;

});


document.addEventListener("mousemove", function (event) {

    if (!draggedWindow) {
        return;
    }

    /*
       Don't allow dragging on small screens.
    */

    if (window.innerWidth <= 700) {
        return;
    }

    draggedWindow.style.left =
        (event.clientX - dragOffsetX) + "px";

    draggedWindow.style.top =
        (event.clientY - dragOffsetY) + "px";

});


document.addEventListener("mouseup", function () {

    draggedWindow = null;

});


/* =========================================================
   PREVENT CONTEXT MENU ON ARCHIVE UI
   ========================================================= */

document.addEventListener("contextmenu", function (event) {

    /*
       Keep browser context menu available for normal
       text selection. This is intentionally left enabled.
    */

});


/* =========================================================
   END OF ARCHIVE OS
   ========================================================= */