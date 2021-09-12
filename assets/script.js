var time_remaining = 120
var score = 0

var questions = document.querySelector(".questions")

document.getElementById("time_remaining").innerHTML = "Time Remaining:" + time_remaining
document.getElementById("start_button").innerHTML = "Start the quiz!"

questions.children[0].textContent = "Welcome to my coding quiz! Would you like to begin?"

