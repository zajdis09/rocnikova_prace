let question = document.getElementsByClassName("question")[0];
let answer = document.getElementsByClassName("answer");
let answerA = document.getElementsByClassName("answer answerA")[0];
let answerB = document.getElementsByClassName("answer answerB")[0];
let answerC = document.getElementsByClassName("answer answerC")[0];
let answerD = document.getElementsByClassName("answer answerD")[0];
let start = document.getElementsByClassName("start")[0];
let restart = document.getElementsByClassName("restart")[0];
let padesat = document.getElementsByClassName("padesat")[0];
let zmena = document.getElementsByClassName("zmena")[0];
let wsad = document.getElementsByClassName("wsad")[0];
let questions = [];
let tady = 0;
let vymena = false;

let question1 = {
    question: "Jaký rok se Titanic ponořil v Atlantském oceánu dne 15. dubna při své první plavbě z Southamptonu?",
    answer1: "1912",
    answer2: "1898",
    answer3: "1945",
    answer4: "1923",
    answer: "1912",
};
questions.push(question1);

let question2 = {
    question: "Jaký je nejmenší pták na světě?",
    answer1: "Sýkora koňadra",
    answer2: "Holub domácí",
    answer3: "Včelí kolibřík",
    answer4: "Sojka obecná",
    answer: "Včelí kolibřík",
};
questions.push(question2);

let question3 = {
    question: "Jaká je životnost vážky?",
    answer1: "2 hodiny",
    answer2: "24 hodin",
    answer3: "1 měsíc",
    answer4: "14 dní",
    answer: "24 hodin",
};
questions.push(question3);

let question4 = {
    question: "Který chemický prvek má latinský název calcium?",
    answer1: "Železo",
    answer2: "Vápník",
    answer3: "Uhlík",
    answer4: "Dusík",
    answer: "Vápník",
};
questions.push(question4);

let question5 = {
    question: "Jaký je chemický symbol pro stříbro?",
    answer1: "C",
    answer2: "Au",
    answer3: "Ag",
    answer4: "Zn",
    answer: "Ag",
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
    question: "Jaké je hlavní město Portugalska?",
    answer1: "Lisabon",
    answer2: "Praha",
    answer3: "Madrid",
    answer4: "Londýn",
    answer: "Lisabon",
};
questions.push(question8);

let question9 = {
    question: "Které z měst neleží v Maďarsku?",
    answer1: "Pécs",
    answer2: "Sátoraljaújhely",
    answer3: "Nitra",
    answer4: "Dorog",
    answer: "Nitra",
};
questions.push(question9);

let question10 = {
    question: "Který herec získal nejlepšího herce Oscara pro filmy Philadelphia (1993) a Forrest Gump (1994)?",
    answer1: "Bruce Willis",
    answer2: "Tom Hanks",
    answer3: "Leonardo DiCaprio",
    answer4: "Johnny Depp",
    answer: "Tom Hanks",
};
questions.push(question10);

let question11 = {
    question: "Jakou sportovní hru vynalezl James Naismith v roce 1891?",
    answer1: "Basketbal",
    answer2: "Fotbal",
    answer3: "Hokej",
    answer4: "Tenis",
    answer: "Basketbal",
};
questions.push(question11);

let question12 = {
    question: "Český král Václav IV. byl synem?",
    answer1: "Karla IV.",
    answer2: "Václava III.",
    answer3: "Tomáše Garrigue Masaryka",
    answer4: "Jana Lucemburského",
    answer: "Karla IV.",
};
questions.push(question12);

let question13 = {
    question: "Jak dlouho se hraje fotablový zápas?",
    answer1: "45 minut",
    answer2: "60 minut",
    answer3: "90 minut",
    answer4: "120 minut",
    answer: "90 minut",
};
questions.push(question13);

let question14 = {
    question: "Jaká je nejvyšší hora světa?",
    answer1: "Sněžka",
    answer2: "Mount Everest",
    answer3: "K2",
    answer4: "Manáslu",
    answer: "Mount Everest",
};
questions.push(question14);

let question15 = {
    question: "Jaká je nejvyšší budova světa?",
    answer1: "Shanghai Tower",
    answer2: "Burdž Chalífa",
    answer3: "Central Park Tower",
    answer4: "Petřín",
    answer: "Burdž Chalífa",
};
questions.push(question15);

let question16 = {
    question: "Jak se jmenuje nejznámější hokejová liga na světě?",
    answer1: "NBA",
    answer2: "KHL",
    answer3: "NFL",
    answer4: "NHL",
    answer: "NHL",
};
questions.push(question16);

let question17 = {
    question: "Jáké číslo nosí na svém dresu Jaromír Jágr?",
    answer1: "86",
    answer2: "10",
    answer3: "92",
    answer4: "68",
    answer: "68",
};
questions.push(question17);

let question18 = {
    question: "Kolik hráčů je v olympijském curlingovém týmu?",
    answer1: "2",
    answer2: "4",
    answer3: "6",
    answer4: "8",
    answer: "4",
};
questions.push(question18);

let question19 = {
    question: "Kolik let bude trvat, než kosmická loď vypuštěná ze Země dorazí na planetu Pluto?",
    answer1: "6 měsíců",
    answer2: "112 let",
    answer3: "9,5 roku",
    answer4: "2 roky",
    answer: "Devět a půl roku",
};
questions.push(question19);

let question20 = {
    question: "Jak se jmenuje skupina s následujícími členy: John Deacon, Brian May, Freddie Mercury, Roger Taylor?",
    answer1: "Queen",
    answer2: "Prince",
    answer3: "Boss",
    answer4: "Baby",
    answer: "Queen",
};
questions.push(question20);

let question21 = {
    question: "Která americká popová hvězda měla úspěch v hitparádách roku 2015 se singly „Sorry“ a „Love Yourself“?",
    answer1: "R. Kelly",
    answer2: "Justin Bieber",
    answer3: "Eminem",
    answer4: "Justin Timberlake",
    answer: "Justin Bieber",
};
questions.push(question21);

let question22 = {
    question: "Kde je na světě vystavena Mona Lisa Leonarda da Vinciho?",
    answer1: "Praha",
    answer2: "Paříž",
    answer3: "New York",
    answer4: "Berlín",
    answer: "Paříž",
};
questions.push(question22);

let question23 = {
    question: "Kolik filmů Bond se Roger Moore objevil jako 007?",
    answer1: "1",
    answer2: "7",
    answer3: "6",
    answer4: "3",
    answer: "7",
};
questions.push(question23);

let question24 = {
    question: "Jak starý byl Michael Jackson, když smutně zemřel v roce 2009?",
    answer1: "30",
    answer2: "40",
    answer3: "50",
    answer4: "60",
    answer: "50",
};
questions.push(question24);

let question25 = {
    question: "Která desková hra se skládá z 40 prostor obsahujících 28 nemovitostí, čtyř železnic, dvou utilit, tří prostor šance, tří prostorů společných truhly, luxusního daňového prostoru, prostoru daně z příjmu a čtyř rohových čtverců: GO, vězení, parkování zdarma a Jít do vězení?",
    answer1: "Monopoly",
    answer2: "Krycí jména",
    answer3: "Activity",
    answer4: "Dáma",
    answer: "Monopoly",
};
questions.push(question25);

let question26 = {
    question: "Jaká je měna Dánska?",
    answer1: "Koruna",
    answer2: "Euro",
    answer3: "Dollar",
    answer4: "Kuna",
    answer: "Koruna",
};
questions.push(question26);

let question27 = {
    question: "Kolik má český jazyk pádů_",
    answer1: "2",
    answer2: "4",
    answer3: "7",
    answer4: "9",
    answer: "7",
};
questions.push(question27);

let question28 = {
    question: "Kolik stálých zubů má pes?",
    answer1: "28",
    answer2: "42",
    answer3: "36",
    answer4: "44",
    answer: "42",
};
questions.push(question28);

let question29 = {
    question: "Ve které zemi na světě je podle všeho nejvíce kilometrů dálnice?",
    answer1: "Rusko",
    answer2: "Brazílie",
    answer3: "Čína",
    answer4: "USA",
    answer: "Čína",
};
questions.push(question29);

let question30 = {
    question: "Ve kterém státě USA je město Nashville?",
    answer1: "Tennessee",
    answer2: "Jižní Dakota",
    answer3: "Oklahoma",
    answer4: "Texas",
    answer: "Tennessee",
};
questions.push(question30);

let question31 = {
    question: "Kdo napsal romány Gone Girl a Sharp Objects?",
    answer1: "Gillian Flynn",
    answer2: "Joanne Rowling",
    answer3: "Stephen King",
    answer4: "Jo Nesbø",
    answer: "Gillian Flynn",
};
questions.push(question31);

let question32 = {
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer: "",
};
questions.push(question32);

let question33 = {
    question: "Jak se říkalo turecké město Istanbul před rokem 1930?",
    answer1: "Van",
    answer2: "Ankara",
    answer3: "İzmit",
    answer4: "Konstantinopol",
    answer: "Konstantinopol",
};
questions.push(question33);

let question34 = {
    question: "Pod jaýk týmem závodí jezdec F1 Lewis Hamilton",
    answer1: "Red Bull",
    answer2: "Ferrari",
    answer3: "HAAS",
    answer4: "Mercedes",
    answer: "Mercedes",
};
questions.push(question34);

let question35 = {
    question: "Jaké zvíře, má ve znaku znažka Red Bull?",
    answer1: "Býka",
    answer2: "Psa",
    answer3: "Krávu",
    answer4: "Slona",
    answer: "Býka",
};
questions.push(question35);

let question36 = {
    question: "Gouda je oblíbený sýr pocházející ze které země?",
    answer1: "Peru",
    answer2: "Slovensko",
    answer3: "Francie",
    answer4: "Nizozemí",
    answer: "Nizozemí",
};
questions.push(question36);

let question37 = {
    question: "Na jaké teplotě Celsia voda vře?",
    answer1: "300 stupňů Celsia",
    answer2: "100 stupňů Celsia",
    answer3: "0 stupňů Celsia",
    answer4: "10 stupňů Celsia",
    answer: "100 stupňů Celsia",
};
questions.push(question37);

let question38 = {
    question: "Jaké číslo je pekařský tucet?",
    answer1: "13",
    answer2: "5",
    answer3: "20",
    answer4: "300",
    answer: "13",
};
questions.push(question38);

let question39 = {
    question: "Jakým jazykem se mluví v Norsku?",
    answer1: "Dánština",
    answer2: "Švédština",
    answer3: "Norština",
    answer4: "Angličtina",
    answer: "Norština",
};
questions.push(question39);

let question40 = {
    question: "Jak se jmenuje mluvící sněhulák v Disney's Frozen?",
    answer1: "Alo",
    answer2: "Snaf",
    answer3: "Tedy",
    answer4: "Olaf",
    answer: "Olaf",
};
questions.push(question40);

let question41 = {
    question: "Z jaké zěme je fotbalista Cristiano Ronaldo",
    answer1: "Argentina",
    answer2: "Portugalsko",
    answer3: "Brazílie",
    answer4: "Itálie",
    answer: "Portugalsko",
};
questions.push(question41);

let question42 = {
    question: "Jaká je nejpoužíbanější socialní sít všech dob?",
    answer1: "Facebook ",
    answer2: "YouTube ",
    answer3: "Instagram ",
    answer4: "TikTok ",
    answer: "Facebook ",
};
questions.push(question42);

let question43 = {
    question: "Ve kterém roce byl vydán operační systém Microsoft XP?",
    answer1: "1994",
    answer2: "1999",
    answer3: "2001",
    answer4: "2007",
    answer: "2001",
};
questions.push(question43);

let question44 = {
    question: "Kolik prstů mají Simpsonovi?",
    answer1: "3",
    answer2: "4",
    answer3: "5",
    answer4: "6",
    answer: "4",
};
questions.push(question44);

let question45 = {
    question: "Jaké jídlo je Penne?",
    answer1: "Polévka",
    answer2: "Zmrzlina",
    answer3: "Sýr",
    answer4: "Těstoviny",
    answer: "Těstoviny",
};
questions.push(question45);
0


let random = 0;
let money = 0;
let round = 0;
let rounds = 15;
let finished = false;

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
    padesat.style.visibility = "visible";
    zmena.style.visibility = "visible";
    wsad.style.visibility = "visible";
    nextRound();
};

start.onclick = startGame;

const select = () => {
    let element = event.target;
    if (!finished) {
        if (element.innerText === questions[random].answer) {
            element.style.backgroundColor = "green";
            round++;
            if (round === 1) {
                money = 1000;
            } else if (round === 2) {
                money = 2000;
            } else if (round === 3) {
                money = 3000;
            } else if (round === 4) {
                money = 5000;
            } else if (round === 5) {
                money = 10000;
            } else if (round === 6) {
                money = 20000;
            } else if (round === 7) {
                money = 40000;
            } else if (round === 8) {
                money = 80000;
            } else if (round === 9) {
                money = 160000;
            } else if (round === 10) {
                money = 320000;
            } else if (round === 11) {
                money = 640000;
            } else if (round === 12) {
                money = 1250000;
            } else if (round === 13) {
                money = 2500000;
            } else if (round === 14) {
                money = 5000000;
            } else if (round === 15) {
                money = 10000000;
            }

            finished = true;
            if (round === rounds) {
                nextRound();
            } else {
                question.innerText = `Aktuálně máš ${money} Kč`;
                setTimeout(nextRound, 2000);
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


const resetColors = () => {
    let c = 0;
    for (c; c < answer.length; c++) {
        answer[c].style.backgroundColor = "darkblue";
    }
}

const reset = () => {
    round = 0;
    money = 0;
    tady = 0;
    vymena = false;
    startGame();
}

const nextRound = () => {
    finished = false;
    if (round === rounds) {
        finished = true;
        question.innerText = `Výhral jsi ${money} Kč
        Gratuluji, jsi první výherce v historii, kdo vyhrál celou soutěž.`;
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

const otazka = () => {
    if (tady == 0) {
        tady = 1;
        zmena.onclick = nextRound();
    } else {
        zmena.onclick = null;
    }
}

const pade = () => {
    for (let c = 0; c < answer.length; c++) {
        if (answer[c].innerText === questions[random].answer) {
            answer[c].style.background = "green";
            answer[c + 1].style.background = "green";
            padesat.onclick = null;
            break;
        }
    }
}

const ahoj = () => {
    for (let c = 0; c < answer.length; c++) {
        if (answer[c].innerText === questions[random].answer) {
            answer[c].style.background = "green";
            wsad.onclick = null;
            break;
        }
    }
}

const end = () => {
    finished = true;

    let c = 0;
    for (c; c < answer.length; c++) {
        if (answer[c].innerText === questions[random].answer) {
            answer[c].style.backgroundColor = "green";
            break;
        }
    }
    question.innerText = `Vyhrál jsi ${money} Kč
    Pokud chceš hrát znovu, klikni na černé tlačítko.`;
};


