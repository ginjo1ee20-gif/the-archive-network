function login(){

    const code = document.getElementById("archiveCode").value.trim();
    const message = document.getElementById("message");

    if(code === "THESIXTHDOOR"){

        message.style.color = "#9eaf79";
        message.innerHTML = "ARCHIVE CODE ACCEPTED";

        startVerification();

    }else{

        message.style.color = "#a66a5f";
        message.innerHTML = "ACCESS DENIED — INVALID ARCHIVE CODE";

    }
}


function startVerification(){

    const verification = document.getElementById("verificationScreen");
    const output = document.getElementById("verificationOutput");
    const bar = document.getElementById("verificationBar");

    if(!verification) return;

    verification.style.display = "flex";

    output.innerHTML = "";

    const checks = [

        "ARCHIVE CODE RECEIVED",
        "VERIFYING ARCHIVE CODE........ OK",
        "CONNECTING TO ARCHIVE SERVER.. OK",
        "CHECKING SECURITY RECORDS..... OK",
        "CHECKING PERSONNEL DATABASE.... OK",
        "CHECKING CAMERA NETWORK....... OK",
        "CHECKING AUDIO ARCHIVES....... OK",
        "CHECKING RECORD DATABASE...... OK",
        "IDENTITY VERIFIED",
        "ACCESS GRANTED",
        "INITIALIZING ARCHIVE OS..."

    ];

    let index = 0;

    function nextCheck(){

        if(index >= checks.length){

            setTimeout(function(){

                window.location.href = "os.html";

            },900);

            return;
        }

        const line = document.createElement("div");

        line.textContent = checks[index];

        if(
            checks[index].includes("OK") ||
            checks[index] === "IDENTITY VERIFIED" ||
            checks[index] === "ACCESS GRANTED"
        ){

            line.className = "verify-ok";

        }else{

            line.className = "verify-warning";

        }

        output.appendChild(line);

        const progress =
            ((index + 1) / checks.length) * 100;

        bar.style.width = progress + "%";

        index++;

        setTimeout(nextCheck,420);

    }

    nextCheck();

}