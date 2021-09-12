var time_remaining = 120
var question_num = 0 //make id tie to html
var score = 0
var start_button = document.querySelector("#start_button")
var answer_1 = document.querySelector("#answer_1")
var answer_2 = document.querySelector("#answer_2")
var answer_3 = document.querySelector("#answer_3")
var answer_4 = document.querySelector("#answer_4")

var questions = document.querySelector(".questions")

document.getElementById("time_remaining").innerHTML = "Time Remaining:" + time_remaining
document.getElementById("start_button").innerHTML = "Start the quiz!"
document.getElementById("answer_1").innerHTML = "1. Javascript"
document.getElementById("answer_2").innerHTML = "2. Python"
document.getElementById("answer_3").innerHTML = "3. C++"
document.getElementById("answer_4").innerHTML = "4. Ruby"

questions.children[0].textContent = "Welcome to my coding quiz! Would you like to begin?"


////////////////////////////////////// Buttons below

//Start button, kicks us of and calls timer.
start_button.addEventListener("click", function() {

    questions.children[0].textContent = "Question 1: What is the most popular programming language in 2021?"
    start_button.setAttribute("style", "display: none")
    answer_1.setAttribute("style", "display: inline-block")
    answer_2.setAttribute("style", "display: inline-block")
    answer_3.setAttribute("style", "display: inline-block")
    answer_4.setAttribute("style", "display: inline-block")   
    timer()
    question_num++
    console.log(question_num)
});

answer_1.addEventListener("click", function() {
    switch(question_num){
        case 1: 
            questions.children[0].textContent = "Question 2: What is the git command to bring your local repository up to date with the remote?"
            document.getElementById("answer_1").innerHTML = "1. git pull "
            document.getElementById("answer_2").innerHTML = "2. git get "
            document.getElementById("answer_3").innerHTML = "3. git update "
            document.getElementById("answer_4").innerHTML = "4. git add "
            time_remaining -=5
            question_num++
        break;

        case 2:
            questions.children[0].textContent = "Question 3: Which of these is not a programming language?"
            document.getElementById("answer_1").innerHTML = "1. Sapphire "
            document.getElementById("answer_2").innerHTML = "2. Ruby "
            document.getElementById("answer_3").innerHTML = "3. Java "
            document.getElementById("answer_4").innerHTML = "4. Rust "
            score += 5
            question_num++
        break;

        case 3:
            questions.children[0].textContent = "Question 4: When you run a function, what is the term used?"
            document.getElementById("answer_1").innerHTML = "1. Grabbing "
            document.getElementById("answer_2").innerHTML = "2. Calling"
            document.getElementById("answer_3").innerHTML = "3. Running "
            document.getElementById("answer_4").innerHTML = "4. Looping "
            score +=5
            question_num++
        break;
        
        case 4:
            question_num++
            game_over_man()
            console.log(question_num)
        break;
    }
});

answer_2.addEventListener("click", function() {
    switch(question_num){
        case 1: 
            questions.children[0].textContent = "Question 2: What is the git command to bring your local repository up to date with the remote?"
            document.getElementById("answer_1").innerHTML = "1. git pull "
            document.getElementById("answer_2").innerHTML = "2. git get "
            document.getElementById("answer_3").innerHTML = "3. git update "
            document.getElementById("answer_4").innerHTML = "4. git add "
            score += 5
            question_num++
        break;

        case 2:
            questions.children[0].textContent = "Question 3: Which of these is not a programming language?"
            document.getElementById("answer_1").innerHTML = "1. Sapphire "
            document.getElementById("answer_2").innerHTML = "2. Ruby "
            document.getElementById("answer_3").innerHTML = "3. Java "
            document.getElementById("answer_4").innerHTML = "4. Rust "
            time_remaining -=5
            question_num++
        break;

        case 3:
            questions.children[0].textContent = "Question 4: When you run a function, what is the term used?"
            document.getElementById("answer_1").innerHTML = "1. Grabbing "
            document.getElementById("answer_2").innerHTML = "2. Calling"
            document.getElementById("answer_3").innerHTML = "3. Running "
            document.getElementById("answer_4").innerHTML = "4. Looping "
            question_num++
        break;
        
        case 4:
            score +=5
            question_num++
            game_over_man()
            console.log(question_num)
        break;
    }
});


answer_3.addEventListener("click", function() {
    switch(question_num){
        case 1: 
            questions.children[0].textContent = "Question 2: What is the git command to bring your local repository up to date with the remote?"
            document.getElementById("answer_1").innerHTML = "1. git pull "
            document.getElementById("answer_2").innerHTML = "2. git get "
            document.getElementById("answer_3").innerHTML = "3. git update "
            document.getElementById("answer_4").innerHTML = "4. git add "
            time_remaining -=5
            question_num++
        break;

        case 2:
            questions.children[0].textContent = "Question 3: Which of these is not a programming language?"
            document.getElementById("answer_1").innerHTML = "1. Sapphire "
            document.getElementById("answer_2").innerHTML = "2. Ruby "
            document.getElementById("answer_3").innerHTML = "3. Java "
            document.getElementById("answer_4").innerHTML = "4. Rust "
            time_remaining -=5
            question_num++
        break;

        case 3:
            questions.children[0].textContent = "Question 4: When you run a function, what is the term used?"
            document.getElementById("answer_1").innerHTML = "1. Grabbing "
            document.getElementById("answer_2").innerHTML = "2. Calling"
            document.getElementById("answer_3").innerHTML = "3. Running "
            document.getElementById("answer_4").innerHTML = "4. Looping "
            time_remaining -=5
            question_num++
        break;
        
        case 4:
            question_num++
            game_over_man()
            console.log(question_num)
        break;
    }
});

answer_4.addEventListener("click", function() {
    switch(question_num){
        case 1: 
            questions.children[0].textContent = "Question 2: What is the git command to bring your local repository up to date with the remote?"
            document.getElementById("answer_1").innerHTML = "1. git pull "
            document.getElementById("answer_2").innerHTML = "2. git get "
            document.getElementById("answer_3").innerHTML = "3. git update "
            document.getElementById("answer_4").innerHTML = "4. git add "
            time_remaining -=5
            question_num++
        break;

        case 2:
            questions.children[0].textContent = "Question 3: Which of these is not a programming language?"
            document.getElementById("answer_1").innerHTML = "1. Sapphire "
            document.getElementById("answer_2").innerHTML = "2. Ruby "
            document.getElementById("answer_3").innerHTML = "3. Java "
            document.getElementById("answer_4").innerHTML = "4. Rust "
            time_remaining -=5
            question_num++
        break;

        case 3:
            questions.children[0].textContent = "Question 4: When you run a function, what is the term used?"
            document.getElementById("answer_1").innerHTML = "1. Grabbing "
            document.getElementById("answer_2").innerHTML = "2. Calling"
            document.getElementById("answer_3").innerHTML = "3. Running "
            document.getElementById("answer_4").innerHTML = "4. Looping "
            time_remaining -=5
            question_num++
        break;
        
        case 4:
            question_num++
            game_over_man()
            console.log(question_num)
        break;
    }
});

//////////////////////// Functions below

//Timer for the quiz
function timer() {
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (time_remaining >= 1  && question_num < 5) {
        time_remaining--;
        document.getElementById("time_remaining").innerHTML = "Time Remaining:" + time_remaining

      } else {
        clearInterval(timeInterval);
        game_over_man()
      }
    }, 1200);
  }

  //ends the quiz, heads to score screen
function game_over_man() {

    if (time_remaining >= 1) {
        clearInterval(timer)
        questions.children[0].textContent = "Well done!  Your final score is: " + score
        answer_1.setAttribute("style", "display: none")
        answer_2.setAttribute("style", "display: none")
        answer_3.setAttribute("style", "display: none")
        answer_4.setAttribute("style", "display: none")
        }
    else {
        questions.children[0].textContent = "Times up! Your final score is: " + score
        answer_1.setAttribute("style", "display: none")
        answer_2.setAttribute("style", "display: none")
        answer_3.setAttribute("style", "display: none")
        answer_4.setAttribute("style", "display: none")
        };

    
}

