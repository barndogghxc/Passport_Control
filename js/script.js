alert("Damn Dawg, looks like  you left your passport, make you a deal! If you can answer 6 out of 10 questions right, ill let you in ");

// let test = 0;
// let test_status = 0; 
// let question = 0; 
// let choice = 0;
// let choices = 0; 
// let chA = 0;
// let chB = 0;
// let chC = 0;
// let chD = 0;
// let correct = 0;


// // let questions = [

// // [ "We elect a U.S. Senator for how many years?", 
// ["4", "8", "6", "10", "C" ],
// [ "During the Cold War, what was the main concern of the United States?", 
// ["Communism", "Taliban", "Mumble Rappers", "Nepotism", "A" ],
// [ "Which of the following is a U.S. territory?", "Philipines", "Thailand", 
// ["Guam", "Hawaii", "C"],
// [ "Why does the flag have 13 stripes?", 
// ["13 is a lucky number", "The original flagmaker had 13 children", "13 original colonies", "The 13 secret ingriedients to the chicken", "C"],
// [ "We elect a President for how many years?", 
// ["4", "12", "8", "5", "A" ],
// [ "If the President can no longer serve, who becomes President?", 
// ["Chief of Staff", "The Vice President", "Secretary of State", "Lead General", "B"], 
// [ "What do we call the first ten amendments to the Constitution?",
// ["The Bill of Rights", "The Ten Commandments", "The Bill of Lading", "The List of Ten", "A"],
// [ "Which is a right or freedom from the First Amendment?", 
// ["Right to vote", "Right to avoid taxes", "Right to free exercise of religion", "Right to bear arms", "C"],
// [ "What was the purpose of the Declaration of Independence?", 
// ["Formed an alliance with South America", "Announced our independence from Great Britain", "Announced our independence from Germany", "Freed the slaves", "B"],
// [ "What is one purpose of the U.S. Constitution?", 
// ["Declared war", "Defines state laws", "Protects the basic rights of Americans", "Establishes treaties", "B"],
// [ "What severed ties with Great Britain?", 
// ["The President of the United States", "The Supreme Court", "The U.S. Constitution","The Declaration of Independence", "D"],
// [ "Before he was President, Eisenhower was a general. What war was he in?", 
// ["World War II", "World War I", "Civil War", "Vietnam War", "A"],
// [ "Name one state that borders Canada", 
// ["New Jersey", "Idaho", "Ohio", "Massachusetts", "B" ],
// [ "Name one state that borders Mexico", 
// ["Florida", "California", "Utah", "Ohio", "B" ],
// [ "What is the capital of the United States?", 
// ["Washington", "Washington, D.C.", "New York City", "Chicago", "B" ],
// [ "What is the name of the national anthem?", 
// ["O Say Can You See", "The Star-Spangled Banner", "America The Beautiful", "Whistle while you Twerk", "B"],
// [ "When do we celebrate Independence Day?", "December 25", "December 12", "July 4", "September 13", "C" ],
// [ "How many stars does the flag have?", "50", "51", "12", "13", "A" ],
// [ "What did Susan B. Anthony do?", "Fought for womens rights", "Punched a Nazi", "Went to General Assembly", "Was an Instagram Model", "A"],
// [ "Where is the Statue of Liberty?", "New Jersey", "Florida", "Maine", "Boston", "A" ],
// [ "Name the U.S. war between the North and the South", "Civil War", "The Cold War", "World War I", "World War II", "A" ],
// [ "What happened at the Constitutional Convention?", "The Founding Fathers wrote the Constitution", "USA became independent", "Founding Fathers discovered the Red Coats might be approaching", "John Hancock Died", "A"],
// [ "Who was President during the Great Depression and World War II?", "Franklin Roosevelt", "Harry Truman", "Calvin Coolidge", "Richard Nixon", "A"],
// [ "Who was President during World War I?","Woodrow Wilson", "George Washington", "Abe Lincoln", "John F. Kennedy", "A"],
// [ "What territory did the United States buy from France in 1803?", "New York", "Louisiana", "Mississippi", "California", "B"],
// [ "Who is the Father of Our Country?", "Obama", "Washington", "Lincoln", "Jefferson", "B"],
// [ "When was the Constitution written?", "1902", "1787", "1802", "1998", "B"],
// [ "When was the Declaration of Independence adopted?", "July 4, 1962", "July 4, 1776", "July 4, 1600", "July 4, 1998", "B"],
// [ "Who wrote the Declaration of Independence?", "Lincoln", "Thomas Jefferson", "Bill Clinton", "George Washinton", "B"],
// [ "When must all men register for the Selective Service?", "16", "18", "21", "12", "B"],
// [ "When is the last day you can send in federal income tax forms?", "April 12", "April 16", "April 15", "October 15", "C"],
// [ "How old do citizens have to be to vote for President?", "16", "21", "18", "23", "C"],
// [ "Which of these states do not border Mexico?", "Texas", "Arizona", "California", "New Jersey", "D"],
// [ "What Ocean is on the East Coast of the United States?", "Pacific", "Atlantic", "Artic", "Indian", "B"],
// [ "How many U.S. Senators are there?", "89", "100", "134", "72", "B"],
// [ "We elect a U.S. Representative for how many years?", "6", "4", "2", "3", "C"],
// [ "Why do some states have more Representatives than other states?", "Because New Jersey is the best", "Because screw Kansas", "States Population", "Snape killed Dumbledore", "C"],
// [ "Which of the following is not a U.S. National Holiday?", "Martin Luther King Day", "Veterans Day", "Obama Day", "Christmas", "C"],
// [ "In what month do we vote for President?", "April", "June", "November", "October", "C"],
// [ "Who signs bills to become laws?", "The Vice President", "The President", "The Senate", "The People", "B"],
// [ "What is the highest court in the United States?", "The District Courts", "The Supreme Court", "The Appellate Courts", "The County Court", "B"],
// [ "How many justices are on the Supreme Court?", "9", "13", "2", "5", "A"],
// [ "What are the two major political parties in the United States?", "Democratic & Republican", "Democratic & Independent", "Republican & Independent", "Independent & Liberal", "A"],
// [ "What do we show loyalty to when we say the Pledge of Allegiance?", "The Flag", "The Army", "The fictious man in the sky", "The President", "A"]
// ]

// function getty(x) {
// 	return document.getElementById (x);
// }

// // function render(){
// // 	test = getty("test");
// // 	if(pos >= questions.length){
// // 		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
// // 		getty("test_status").innerHTML = "Test Completed";
// // 		return false;
// // 	}
// // 	getty("test_status").innerHTML= "Question "+(pos+1)+" of "+questions.length;
// // 	question = questions[pos][0];
// // 	chA = questions[pos][1];
// // 	chB = questions[pos][2];
// // 	chC = questions[pos][3];
// // 	chD = questions[pos][4];
// // 	test.innerHTML = "<h3>"+question+"</h3>";
// // 	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
// // 	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
// // 	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
// // 	test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
// // 	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
// // }
		
// // function checkAnswer () {
// // 	choices  = document.getElementsByName("choices");
// // 	for(let i=0; i < choices.length; i++) {
// // 		if(choices[i].checked) {
// // 			choice = choices[i].value;
// // 		}
// // 	}
// // 	if(choice == questions[pos][4]){
// // 		correct++;
// // 	}
// // 	pos++;
// // 	render(); 
// // }
// // window.addEventListener("onclick", render, false);

function startTimer(x) {
    let sec = x
    ('.timer').show()
    ('.timer').text(sec)

    timer = setInterval(function() {
      sec--
      ('.timer').text(sec)
      if (sec === -1) {
        $('.timer').fadeOut('fast')
        stopTimer()
        clearCurrentGame()
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer)
    $('.timer').hide()
  }

startTimer()