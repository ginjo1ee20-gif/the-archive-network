const bootLines = [

"ARCHIVE INTERNAL NETWORK",
"",
"Booting System...",
"",
"[OK] Memory Check",
"[OK] Security Module",
"[OK] Archive Database",
"[OK] Personnel Records",
"[OK] Research Files",
"",
"Connection Established.",
"",
"Loading Interface..."

];

const terminal=document.getElementById("terminalText");

let line=0;

function typeLine(){

    if(line<bootLines.length){

        terminal.innerHTML+=bootLines[line]+"\n";

        line++;

        setTimeout(typeLine,350);

    }

    else{

        setTimeout(function(){

            document.getElementById("bootScreen").style.display="none";

            document.getElementById("mainWebsite").style.display="block";

        },1200);

    }

}

window.onload=typeLine;