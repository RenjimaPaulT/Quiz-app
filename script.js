const quizData=[
{
  question: "Which is the Capital of Australia?",
  a:"Sydney",
  b:"Canberra",
  c:"Perth",
  d:"Darwin",
  correct:"b"
},
{
    question: "Which is bigger than 10",
    a:"11",
    b:"6",
    c:"7",
    d:"2",
    correct:"a"
  },
  {
    question: "IndependenceDay of India",
    a:"Sep 5",
    b:"March 3",
    c:"Aug 15",
    d:"March 14",
    correct:"c"
  },
  {
    question: "Republic Day of India",
    a:"Dec 25",
    b:"aug 15",
    c:"april 1",
    d:"jan 26",
    correct:"d"
  },
  {
    question: "Labours day In Australia",
    a:"Oct 2",
    b:"may 2",
    c:"Dec 3",
    d:"jan 1",
    correct:"a"
  }
];

const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()
function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
return answer;
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHtml =`
            <h2>You answered ${score}/${quizData.length} questions correct</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})

