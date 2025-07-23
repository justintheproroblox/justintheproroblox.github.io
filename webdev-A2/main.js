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

/*find references to all the buttons and ball */
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const resetBtn = document.querySelector("#resetBtn");
const ball = document.querySelector("#ball");
var ballX = ballY = 0; //assign initial position of ball
function ResetPos() {
    ballX = ballY = 0; //reset to zero
    ball.style.left = ballX + "px"; //set left property to ball x variable
    ball.style.top = ballY + "px"; //set top property to ball x variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}
function MovePos(leftInc, topInc) {
    ballX = ballX + leftInc;
    ballY = ballY + topInc;
    ball.style.left = ballX + "px"; //set left css property to ball x variable
    ball.style.top = ballY + "px"; //set top css property to ball y variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}


function MoveLeft() {
    ballX = ballX - 10; //decrement by 10
    ballY = ballY + 0; //no change
    ball.style.left = ballX + "px"; //set left css property to ball x variable
    ball.style.top = ballY + "px"; //set top css property to ball y variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}
//eventlistener to activate MoveLeft (named callback function)
leftBtn.addEventListener("click", MoveLeft); //no brackets after MoveLeft
//eventListener to anonymous callback function (other way)
rightBtn.addEventListener("click", function () {
    MovePos(10, 0);
});
upBtn.addEventListener("click", function () {
    MovePos(0, -10);
});
downBtn.addEventListener("click", function () {
    MovePos(0, 10);
});
resetBtn.addEventListener("click", ResetPos);


const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, score = 0;
function CheckAns() {
    score = 0; //reset score to 0, check ans and give score if correct
    //read the value of the selected radio button for q1
    //     q1 = document.querySelector("input[name='q1']:checked").value;
    //     console.log(q1); //check q1 value retrieved
    //     if (q1 == "Tokyo") score++;
    //     //read the value of the selected radio button for q2
    //     q2 = document.querySelector("input[name='q2']:checked").value;
    //     console.log(q2); //check q2 value retrieved
    //     if (q2 == "Red") score++;
    //     scorebox.innerHTML = "Score:" + score;
    ansArray = ["ChordVToI", "Red"];
    for (i = 0; i < ansArray.length; i++) {
        CheckOneAns(i + 1, ansArray[i]);
    }
    scorebox.innerHTML = "Score:" + score;

}

function CheckOneAns(qNo, CorrAns) {
    cssSel = `input[name='q${qNo}']:checked`;
    qTemp = document.querySelector(cssSel).value;
    console.log(qTemp);
    if (qTemp == CorrAns) score++;
}

