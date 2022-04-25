let question = document.getElementsByClassName("question")[0];
let answer = document.getElementsByClassName("answer");
let answerA = document.getElementsByClassName("answer answerA")[0];
let answerB = document.getElementsByClassName("answer answerB")[0];
let answerC = document.getElementsByClassName("answer answerC")[0];
let answerD = document.getElementsByClassName("answer answerD")[0];
let start = document.getElementsByClassName("start")[0];
let restart = document.getElementsByClassName("restart")[0];
let questions = [];

const reset = () => {
    round = 0;
    money = 0;
    startGame();

}

let question1 = {
    question: "Co je to ukulele?",
    answer1: "vzácné luční kvítí",
    answer2: "nástroj strunný",
    answer3: "bulharské hory",
    answer4: "jezero v Norsku",
    answer: "nástroj strunný",
};
questions.push(question1);

let question2 = {
    question: "V pohádce Jana Wericha „Tři veteráni“ princezně Bosaně naroste:",
    answer1: "sloní kel",
    answer2: "jelení paroh",
    answer3: "kančí tesák",
    answer4: "dlouhý nos",
    answer: "dlouhý nos",
};
questions.push(question2);

let question3 = {
    question:
        "V knize Boženy Němcové „Babička“ se psi ze Starého bělidla jmenují:",
    answer1: "Sultán a Tyrl",
    answer2: "Slon a Tygr",
    answer3: "Sumec a Tuleň",
    answer4: "Satan a Troll",
    answer: "Sultán a Tyrl",
};
questions.push(question3);

let question4 = {
    question: "Který chemický prvek má latinský název calcium?",
    answer1: "železo",
    answer2: "vápník",
    answer3: "uhlík",
    answer4: "dusík",
    answer: "vápník",
};
questions.push(question4);

let question5 = {
    question: "Baribal je?",
    answer1: "míčová hra",
    answer2: "druh medvěda",
    answer3: "ostrov v Karibiku",
    answer4: "Keltský vůdce",
    answer: "druh medvěda",
};
questions.push(question5);

let question6 = {
    question: "Umělecká přehlídka zvaná kvadrienále se koná jednou za?",
    answer1: "dva roky",
    answer2: "tři roky",
    answer3: "čtyři roky",
    answer4: "pět let",
    answer: "čtyři roky",
};
questions.push(question6);

let question7 = {
    question: "Kterému z těchto států nepatřily Jónské ostrovy ležící u západního pobřeží Řecka?",
    answer1: "USA",
    answer2: "Rusku",
    answer3: "Francii",
    answer4: "Řecku",
    answer: "USA",
};
questions.push(question7);

let question8 = {
    question: "Který z těchto hráčů nehraje za SK Kosmonosy",
    answer1: "Jan Keszeg",
    answer2: "Jan Podzimek",
    answer3: "Tomáš Fabián",
    answer4: "Vojtěch Šuc",
    answer: "Vojtěch Šuc",
};
questions.push(question8);

let question9 = {
    question: "Které z měst neleží v Maďarsku?",
    answer1: "Pécs",
    answer2: "Sátoraljaújhely",
    answer3: "Nyitra",
    answer4: "Dorog",
    answer: "Nyitra",
};
questions.push(question9);

let question10 = {
    question: "Za který klub jsem nikdy nehrál?",
    answer1: "SK Kosmonosy",
    answer2: "FK Mladá Bolelav",
    answer3: "Čistá",
    answer4: "OFS (Okresní fotbalový svaz)",
    answer: "Čistá",
};
questions.push(question10);

let question11 = {
    question: "Český král Václav IV. byl synem?",
    answer1: "Karla IV.",
    answer2: "Václava III.",
    answer3: "tadan",
    answer4: "Jana Lucemburského",
    answer: "Karla IV.",
};
questions.push(question11);

let random = 0;
let money = 0;
let round = 0;
let rounds = questions.length;
let finished = false;

const select = () => {
    let element = event.target;
    if (!finished) {
        if (element.innerText === questions[random].answer) {
            element.style.backgroundColor = "green";
            round++;
            if (money === 0) {
                money = 2000;
            } else {
                money *= 2;
            }
            finished = true;
            if (round === rounds) {
                nextRound();
            } else {
                question.innerText = `${money} CZK`;
                setTimeout(nextRound, 3000);
            }
        } else {
            element.style.backgroundColor = "red";
            end();
        }
    }
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const startGame = () => {
    console.log("start hry");
    let i = 0;

    for (i; i < answer.length; i++) {
        answer[i].onclick = select;
    }
    start.style.display = "none";
    question.style.visibility = "visible";
    answerA.style.visibility = "visible";
    answerB.style.visibility = "visible";
    answerC.style.visibility = "visible";
    answerD.style.visibility = "visible";
    restart.style.visibility = "visible";
    nextRound();
};

start.onclick = startGame;


const resetColors = () => {
    let c = 0;
    for (c; c < answer.length; c++) {
        answer[c].style.backgroundColor = "darkblue";
    }
}

const nextRound = () => {
    finished = false;

    if (round === rounds) {
        finished = true;
        question.innerText = `Výhra ${money} CZK`;
        return;
    }
    resetColors();
    random = getRandomInt(questions.length);
    question.innerText = questions[random].question;
    answerA.innerText = questions[random].answer1;
    answerB.innerText = questions[random].answer2;
    answerC.innerText = questions[random].answer3;
    answerD.innerText = questions[random].answer4;
};


const end = () => {
    finished = true;
    let c = 0;
    for (c; c < answer.length; c++) {
        if (answer[c].innerText === questions[random].answer) {
            answer[c].style.backgroundColor = "green";
            break;
        }
    }
    question.innerText = `Restart hry, Výhra ${money} CZK`;
    setTimeout(reset, 3000);
};



