console.log("Damn Dawg, looks like  you left your passport, make you a deal! If you can answer 6 out of 10 questions right, ill let you in ");
let currentQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

let container = document.getElementById('quizContain')
let questDiv = document.getElementById('question')
let chA = document.getElementById('chA')
let chB = document.getElementById('chB')
let chC = document.getElementById('chC')
let chD = document.getElementById('chD')
let nextButton = document.getElementById('nextButton')
let result = document.getElementById('result')


function render(questionIndex){
	let q = questions[questionIndex];
  questDiv.textContent = (questionIndex + 1) + `.` + q.question;
	chA.textContent = q.choiceA;
	chB.textContent = q.choiceB;
	chC.textContent = q.choiceC;
	chD.textContent = q.choiceD;
};

function renderNext() {
  let selectChoice = document.querySelector('input[type=radio]:checked');
  if(!selectChoice){
    console.log("youre a fool harry potter")
    return;
  }
  let answer = selectChoice.value;
  if(questions[currentQuestion].answer == answer){
    score += 10;
  }
  selectChoice.checked = false;
  currentQuestion++;
  if(currentQuestion == totalQuestions - 1){
    nextButton.textContent = 'Finish';
  }
  if(currentQuestion == totalQuestions){
    container.style.display = 'none';
    result.style.display = "";
    result.textContent = "your score: " + score;
    return
  }
  render(currentQuestion);
}
render(currentQuestion);

