console.log("Damn Dawg, looks like  you left your passport, make you a deal! If you can answer 6 out of 10 questions right, ill let you in ");
let currentQuestion = 0;
let score = 0;
let totalQuestions = null;

let container = document.getElementById('quizContain')
let questDiv = document.getElementById('question')
let chA = document.getElementById('chA')
let chB = document.getElementById('chB')
let chC = document.getElementById('chC')
let chD = document.getElementById('chD')
let nextButton = document.getElementById('nextButton')
let result = document.getElementById('result')

function formStart() {
    $('.form').append('<button class="level-button" id="beginner-start">Beginer</button>')
    $('.form').append('<button class="level-button" id="easy-start">Easy</button>')
    $('.form').append('<button class="level-button" id="medium-start">Medium</button>')
    $('.form').append('<button class="level-button" id="hard-start">Hard</button>')  
    $('.form').append('<button class="level-button" id="deathEater-start">DeathEater</button>')

    $('.nextButton').on('click', function () {
      var level = $(this).attr('id')
      if (level === 'beginner-start') {
        $('.form').hide()
        totalQuestions = beginnerQuestions
        render(index)
        startTimer(60)
      } else if (level === 'easy-start') {
        $('.form').hide()
        totalQuestions = easyQuestions
        render(index)
        startTimer(30)
      } else if (level === 'medium-start-start') {
        $('.form').hide()
        totalQuestions = mediumQuestions
        render(index)
        startTimer(30)
      } else if (level === 'hard-start') {
        $('.form').hide()
        totalQuestions = hardQuestions
        render(index)
        startTimer(15)
      } else if (level === 'deathEater-start') {
        $('.form').hide()
        questSet = deathEaterQuestions
        render(index)
        startTimer(15)
      }
    })
  }
  

function render(questionIndex){
	let q = totalQuestions[questionIndex];
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

