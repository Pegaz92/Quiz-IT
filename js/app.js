function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;


        var options = quiz.getQuestionIndex().options;
        for(var i = 0; i < options.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = options[i];
            guess("btn" + i, options[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

// Question number
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
// Score
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score is: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

 // Questions
const questions = [
  new Question('Shortcut key for bold is..???', ["ctrl + z", "ctrl + d", "ctrl + v", "ctrl + x"], "ctrl + z"),
  new Question('How many bits in a byte? ???', ["64", "32", "16", "8"], "8 "),
  new Question('A component of the motherboard is...???', ["FGP", "West Bridge", "The processor","DATA"], "The processor"),
  new Question('Pick the input device ???', ["Monitor", "Speakers", "CPU", "Keyboard"], "Keyboard"),
  new Question('How many computer languages are in use?', ["2000", "1000", "500", "16"], "2000"),
  new Question('A small measurement of memory is...???', ["TB", "bit", "Mb", "Gb"], "bit"),
  new Question('HTTP stands for... ???', ["Hyper Test Taxing Protocol", "Hyper Test Texting Protocol", "Hyper Text Transport Protocol", "Hyper Test Taxing Protocol"], "Hyper Text Transport Protocol"),
  new Question('When an application is opened on a computer it is loaded into what ???', ["RAM", "Hard drive", "SSD", "ROM"], "RAM"),
];


const quiz = new Quiz(questions);


populate();
