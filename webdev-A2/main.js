//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
hideall();

//get the "open menu" button (meant for hamIcon)
const hamBtn = document.querySelector("#hamIcon");
//connect hamBtn click to toggleMenus function
hamBtn.addEventListener("click", toggleMenus);
//get the menuItem list
const menuItemsList = document.querySelector("nav ul");
/*toggle, just like light switch, off becomes on, on becomes off*/
/*if menu is shown, hide it, if hidden, show it*/
function toggleMenus() {
    //if menuItemsList dont have the class "menuShow", add the class, else remove class
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Open Menu"; //change button text to chose menu
        menuItemsList.classList.remove("menuShow");
    } else { //if menu NOT showing
        hamBtn.innerHTML = "Close Menu"; //change button text open menu
        menuItemsList.classList.add("menuShow");
    }
}


const cButton = document.querySelector("#cButton");
const cSound = new Audio("audio/cnote.mp3");
const cSharpButton = document.querySelector("#cSharpButton");
const cSharpSound = new Audio("audio/piano-c_CSharp_major.wav")
const dButton = document.querySelector("#dButton");
const dSound = new Audio("audio/piano-d_D_major.wav")
const dSharpButton = document.querySelector("#dSharpButton");
const dSharpSound = new Audio("audio/piano-eb_DSharp_major.wav")
const eButton = document.querySelector("#eButton");
const eSound = new Audio("audio/piano-e_E_major.wav")
const fButton = document.querySelector("#fButton");
const fSound = new Audio("audio/piano-f.mp3");

const playPerfectButton = document.querySelector("#playPerfect");
const perfectCadenceSound = new Audio("audio/f-flat-major-perfect-cadence-V-I.mp3")
const playImperfectButton = document.querySelector("#playImperfect");
const imperfectCadenceSound = new Audio("audio/d-sharp-major-imperfect-cadence-I-V.mp3");
const playInterruptedButton = document.querySelector("#playInterrupted");
const interruptedCadenceSound = new Audio("audio/a-flat-major-interrupted-cadence-V7-vi.mp3");
const playPlagalButton = document.querySelector("#playPlagal");
const plagalCadenceSound = new Audio("audio/d-major-plagal-cadence-IV-I.mp3");


function playCNote() {
    cSound.play();
}
function playCSharpNote() {
    cSharpSound.play();
}
function playDNote() {
    dSound.play();
}
function playDSharpNote() {
    dSharpSound.play();
}
function playENote() {
    eSound.play();
}
function playFNote() {
    fSound.play();
}

function playPerfectCadence() {
    perfectCadenceSound.play();
}
function playImperfectCadence() {
    imperfectCadenceSound.play();
}
function playInterruptedCadence() {
    interruptedCadenceSound.play();
}
function playPlagalCadence() {
    plagalCadenceSound.play();
}

cButton.addEventListener("click", playCNote);
cSharpButton.addEventListener("click", playCSharpNote);
dButton.addEventListener("click", playDNote)
dSharpButton.addEventListener("click", playDSharpNote);
eButton.addEventListener("click", playENote);
fButton.addEventListener("click", playFNote);

playPerfectButton.addEventListener("click", playPerfectCadence);
playImperfectButton.addEventListener("click", playImperfectCadence);
playInterruptedButton.addEventListener("click", playInterruptedCadence);
playPlagalButton.addEventListener("click", playPlagalCadence);



const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, score = 0;
function CheckAns() {
    score = 0; //reset score to 0
    ansArray = ["ChordVToI", "ChordVToVI", "Plagal"]; //correct answers for the quiz
    for (i = 0; i < ansArray.length; i++) {
        CheckOneAns(i + 1, ansArray[i]);
    }  //loop through the answers and check them
    scorebox.innerHTML = "Score: "  + score;

}

function CheckOneAns(qNo, CorrAns) { //function to check one answer
    cssSel = `input[name='q${qNo}']:checked`;
    qTemp = document.querySelector(cssSel).value;
    console.log(qTemp);
    if (qTemp == CorrAns) score++;
}





