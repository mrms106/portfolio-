
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav1');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(function(navItem, index) {
        navItem.addEventListener('click', function() {
            hideAllSections();
            showSection(index);
        });
    });

    function hideAllSections() {
        contentSections.forEach(function(section) {
            section.style.display = 'none';
        });
    }

    function showSection(index) {
        contentSections[index].style.display = 'block';
    }
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

//for mode

let body=document.querySelector("body")
let edu=document.querySelector(".timeline-section")
let slide=document.querySelector(".slider")
let work=document.querySelector(".workc")
let btnmode= document.querySelector(".mode")
let skill= document.querySelector(".skillm")
let curmode="light";
slide.innerText="🌙"
btnmode.addEventListener("click",()=>{
    if(curmode=== "light"){
        curmode="dark"
        body.style.backgroundColor="black"
        edu.style.backgroundColor="black"
        work.style.backgroundColor="black"
        skill.style.backgroundColor="black"
        slide.style.backgroundColor="white"
        slide.innerText="☀️"

        
    }
    else{
        curmode="light"
        body.style.backgroundColor="#072a40"
        edu.style.backgroundColor="rgb(9, 50, 74)"
        slide.style.backgroundColor="#333"
        skill.style.backgroundColor="rgb(11, 53, 76)"
        work.style.backgroundColor="rgb(10, 58, 82)"
        slide.innerText="🌙"
    }
    console.log(curmode);
})
let submit=document.querySelector(".submit")
let contactForm=document.querySelector("#contactForm")
submit.addEventListener("click",() => {
    setTimeout(()=>{
        contactForm.reset();
    },2000)
    
    
})

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById('splash-screen').style.display = 'none';
    }, 2000 ); // 3000 milliseconds = 3 seconds
  });



//quiz game
let btn=document.querySelector(".button")
let btn1=document.querySelector(".button1")
let play=document.querySelector(".Play")

btn.addEventListener('click', function() {
    var play = document.querySelector(".Play");
    play.classList.toggle('Play');
  });

  btn.addEventListener("click",()=>{
    btn.style.display="none"
    btn1.classList.remove("bh")
    play.style.display="inline"

  })
btn1.addEventListener("click",()=>{
    play.style.display="none"
    btn1.classList.add("bh")
    btn.style.display="inline"

})



const quizData = [
    {
        question: "Q.1 What does the HTML 'attribute target=_blank' do?",
        options1: ["Opens the link in a new tab or window"],
        options2: ["Sets the link color to black"],
        options3: ["Adds a blinking effect to the link"],
        options4: ["Targets a specific element on the page"],

        correctAnswer: "Opens the link in a new tab or window"
    },
    {
        question: "Q.2 What does the HTML tag '<em>' represent?",
        options1: ["An abbreviation"],
        options2: ["An emphasized text"],
        options3: ["A horizontal line"],
        options4: ["An input field"],
        correctAnswer: "An emphasized text"
    },
    {
        question: "Q.3 Which CSS property is used to control the spacing between lines of text?",
        options1: ["margin"],
        options2: ["padding"],
        options3: ["line-height"],
        options4: ["font-size"],

        correctAnswer: "line-height"
    },
    {
        question: "Q.4 Which CSS pseudo-class is used to select an element when it gets focus?",
        options1: [":hover"],
        options2: [":active"],
        options3: [":focus"],
        options4: [":visited"],
        correctAnswer: ":focus"
    },
    {
        question: "Q.5 What is the purpose of the `let` keyword in JavaScript?",
        options1: ["Define a constant"],
        options2: ["Declare a variable with block scope"],
        options3: ["Create a global variable"],
        options4: ["Reference an element by ID"],
        correctAnswer: "Declare a variable with block scope"
    },
    {
        question: "Q.6 What is the purpose of the `this` keyword in JavaScript?",
        options1: ["Access the current URL"],
        options2: ["Refer to the current object"],
        options3: ["Specify a function parameter"],
        options4: ["Define a new variable"],
        correctAnswer: "Refer to the current object"
    },
    {
        question: "Q.7 What is the purpose of the `addEventListener` method in JavaScript?",
        options1: ["Create a new array"],
        options2: ["Attach an event handler to an element"],
        options3: ["Append an element to the DOM"],
        options4: ["Apply a CSS style to an element"],
        correctAnswer: "Attach an event handler to an element"
    },
    {
        question: "Q.8 What does AJAX stand for in the context of web development?",
        options1: ["Asynchronous JavaScript and XML"],
        options2: ["Advanced JavaScript and XQuery"],
        options3: ["Automated JSON and XHTML"],
        options4: ["Asymmetric JavaScript and XML"],
        correctAnswer: "Asynchronous JavaScript and XML"
    },
    
        {
            question: "Q.9 Which method is used to concatenate two or more arrays in JavaScript?",
            options1: ["merge()"],
            options2: ["concat()"],
            options3: ["combine()"],
            options4: ["join()"],
            correctAnswer: "concat()"
        },
    {
        question: "Q.10 Which method is used to remove the last element from an array in JavaScript?",
        options1: ["pop()"],
        options2: ["shift()"],
        options3: ["splice()"],
        options4: ["push()"],
        correctAnswer: "pop()"
    }    
    
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.querySelector('.que');
    const optionsContainer1 = document.querySelector('.ans1');
    const optionsContainer2 = document.querySelector('.ans2');
    const optionsContainer3 = document.querySelector('.ans3');
    const optionsContainer4 = document.querySelector('.ans4');
    const currentQuizData = quizData[currentQuestion];

    questionContainer.innerText = currentQuizData.question;
    optionsContainer1.innerHTML = '';
    optionsContainer2.innerHTML = '';
    optionsContainer3.innerHTML = '';
    optionsContainer4.innerHTML = '';

    currentQuizData.options1.forEach((option, index) => {
        const opt = document.createElement('button');
        opt.innerHTML = option;
        opt.addEventListener('click', () => checkAnswer(option));
        optionsContainer1.appendChild(opt);
       
    });
    currentQuizData.options2.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer2.appendChild(button);
       
    });
    currentQuizData.options3.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer3.appendChild(button);
       
    });
    currentQuizData.options4.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer4.appendChild(button);
       
    });
}



function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
        score++;
    }

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        document.querySelector(".box3").classList.remove('boxh')
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.querySelector('.quiz');
    quizContainer.innerHTML = `<h2>Your Score: ${score} out of ${quizData.length}</h2>`;
    
}



function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        document.querySelector(".box3").classList.remove('boxh')
        loadQuestion();
    } else {
        endQuiz();
    }
}
function previousQuestion() {
    if (currentQuestion > 0) {
        
        currentQuestion--;
        loadQuestion();
    }
}

    


// Initial load
loadQuestion();




//for contact me
setTimeout(function() {
    document.querySelector(".nav2").classList.remove('nav3');
  }, 3000);


