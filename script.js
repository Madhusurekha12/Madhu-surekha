/* ===================================
   ELEMENTS
=================================== */

const hero = document.getElementById("hero");
const welcome = document.getElementById("welcome");
const greeting = document.getElementById("greeting");
const story = document.getElementById("story");
const whyYou = document.getElementById("whyYou");
const proposal = document.getElementById("proposal");
const questions = document.getElementById("questions");
const lastQuestion = document.getElementById("lastQuestion");
const letter = document.getElementById("letter");
const celebration = document.getElementById("celebration");

const startBtn = document.getElementById("startBtn");
const promiseBtn = document.getElementById("promiseBtn");
const nextStory = document.getElementById("nextStory");
const storyNext = document.getElementById("storyNext");
const proposalPage = document.getElementById("proposalPage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const warning = document.getElementById("warning");

const questionText = document.getElementById("questionText");
const questionYes = document.getElementById("questionYes");

const foreverYes = document.getElementById("foreverYes");
const restartBtn = document.getElementById("restartBtn");

/* ===================================
   QUESTIONS
=================================== */

const questionsList = [

"Will you always be mine forever? ❤️",

"Will you grow old with me? 🥹",

"Will you hold my hand forever? 🤝",

"Will you always choose me? ❤️",

"Will you keep annoying me forever? 😂",

"Will you make beautiful memories with me? 📸",

"Will you always love me? ❤️"

];

let currentQuestion = 0;

/* ===================================
   SHOW SECTION
=================================== */

function showSection(current, next){

current.classList.add("hidden");

next.classList.remove("hidden");

next.classList.add("fadeIn");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ===================================
   BUTTON EVENTS
=================================== */

startBtn.onclick = () => {

showSection(hero,welcome);

};

promiseBtn.onclick = () => {

showSection(welcome,greeting);

};

nextStory.onclick = () => {

showSection(greeting,story);

};

storyNext.onclick = () => {

showSection(story,whyYou);

};

proposalPage.onclick = () => {

showSection(whyYou,proposal);

};

/* ===================================
   NO BUTTON
=================================== */

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*250-125;

const y=Math.random()*180-90;

noBtn.style.transform=`translate(${x}px,${y}px)`;

warning.innerHTML="😜 Nice try... You have to choose YES ❤️";

});
/* ===================================
   YES BUTTON
=================================== */

yesBtn.addEventListener("click", () => {

    createHearts(40);

    showSection(proposal, questions);

});

/* ===================================
   LOVE QUESTIONS
=================================== */

questionYes.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < questionsList.length){

        questionText.innerHTML = questionsList[currentQuestion];

        createHearts(15);

    }else{

        showSection(questions, lastQuestion);

    }

});

/* ===================================
   FINAL QUESTION
=================================== */

foreverYes.addEventListener("click", () => {

    createHearts(80);

    showSection(lastQuestion, letter);

    setTimeout(()=>{

        showSection(letter, celebration);

        createHearts(120);

    },8000);

});

/* ===================================
   HEART ANIMATION
=================================== */

function createHearts(total){

    for(let i = 0; i < total; i++){

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (18 + Math.random() * 30) + "px";
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }

}

restartBtn.addEventListener("click", () => {
    location.reload();
});
