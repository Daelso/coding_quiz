var scoreboard = document.querySelector("#highScores");
var todoList = document.querySelector("#todo-list");



function display_scoreboard(){
var scores = JSON.parse(localStorage.getItem("highScore"));



    for (var i = 0; i < scores.score.length; i++) {
        var hs = scores.score[i];

        var li = document.createElement("li");
        li.textContent = hs
        li.setAttribute("data-index", i);

        todoList.appendChild(li);


    }
    localStorage.setItem("highScore", JSON.stringify(scores))
}

display_scoreboard()