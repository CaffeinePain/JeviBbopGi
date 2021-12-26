const jevi1 = document.querySelector("#jevi1");
const jevi2 = document.querySelector("#jevi2");
const jevi3 = document.querySelector("#jevi3");
const sflBtn = document.querySelector("#sflBtn");
const showBtn = document.querySelector("#showBtn");
const rstBtn = document.querySelector("#rstBtn");

sflBtn.addEventListener("click", shuffle);
showBtn.addEventListener("click", showResult);
rstBtn.addEventListener("click", reset);

let win = 0;

let shuffled = false;
let done = false;

function shuffle() {
    if(!done) {
        const randNum = Math.floor(Math.random()*3+1);
        win = randNum;
        shuffled = true;
        //shake();
        sflBtn.style.backgroundColor = "tomato";
    }
}

/* function shake() {
    for(i=0;i<10;i++){
        jevi1.style.top = "12%";
        jevi2.style.top = "12%";
        jevi3.style.top = "12%";
        jevi1.style.left = "18%";
        jevi2.style.left = "48%";
        jevi3.style.left = "78%";
        jevi1.style.top = "15%";
        jevi2.style.top = "15%";
        jevi3.style.top = "15%";
        jevi1.style.left = "15%";
        jevi2.style.left = "45%";
        jevi3.style.left = "75%";
    }
} */

function showResult() {
    if (shuffle) {
        switch(win) {
        case 1: jevi1.src = "Img/pinkJevi.png";
                done = true;
                break;
        case 2: jevi2.src = "Img/pinkJevi.png";
                done = true;
                break;
        case 3: jevi3.src = "Img/pinkJevi.png";
                done = true;
                break;
        }
    }
}

function reset() {
    shuffled = false;
    done = false;
    jevi1.src = "Img/greenJevi.png";
    jevi2.src = "Img/greenJevi.png";
    jevi3.src = "Img/greenJevi.png";
    sflBtn.style.backgroundColor = "yellow";
}