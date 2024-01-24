const cont = document.querySelector(".container");

const div = document.createElement("div");
div.classList.add("div_css")

const h = document.createElement("h1");

function createParagraph(hr) {
    let p = document.createElement("p");

    if(hr>=6 && hr<12){
        p.innerText = "Good Morning :( :(";
    }
    else if(hr>=12 && hr<17){
        p.innerText = "Good Day :("
    }
    else if(hr>=17 && hr<18){
        p.innerText = "Good Evening:("
    }
    else{
        p.innerText = "Sleep Tight :("
    }

    return p;
}

function createWatch(digital) {
    let shift = "PM"
    let hr = digital[0];
    if(hr>=0 && hr<12){
        shift = "AM"
    }
    let mnt = digital[1];
    let sec = digital[2];

    let watch = hr+":"+mnt+":"+sec +" "+shift;

    div.innerHTML = watch;
    div.appendChild(h);
    div.appendChild(createParagraph(hr));
    cont.appendChild(div);
}

function Times(){
    let Clock = new Date();
    // console.log(Clock);

    let option = {
        hour:'2-digit',
        minute:'2-digit',second:'2-digit',
        hour24:false,
        timeZone:'Asia/Kolkata'
    }

    let mishra = Clock.toLocaleTimeString("en-GB",option);
    let digital = mishra.split(":");
    
    createWatch(digital);
}

setInterval(Times,100);