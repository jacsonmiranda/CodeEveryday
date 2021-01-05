window.onload = init;
var myData = {};
var page = 0;
var score = 0;
var userAnswer = [];
var output = document.getElementById('output1');
document.getElementById('next').addEventListener('click', function () {
    move(page + 1);
})
document.getElementById('prev').addEventListener('click', function () {
    move(page - 1);
})

function move(a) {
    if (a < 0) {
        a = 0;
    }
    if (a >= myData.length) {
        summary();
    }
    else {
        page = a;
        buildPage();
    }
}

function summary() {
    score = 0;
    var html = '<h1>Summary</h1>';
    for (var x = 0; x < myData.length; x++) {
        html += "Question " + (x + 1) + " ";
        if (myData[x].correct == userAnswer[x]) {
            html += "correct <br>";
            score++;
        }
        else {
            html += "wrong <br>";
        }
    }
    html += "Your score was " + score + " out of " + myData.length;
    output.innerHTML = html;
}
output.addEventListener('click', function () {
    for (var x = 0; x < this.children.length; x++) {
        this.children[x].classList.remove('active');
    }
    if (!event.target.classList.contains('question')) {
        userAnswer[page] = Number(event.target.dataset.index);
        event.target.classList.add('active');
    }
})

function init() {
    getJSON('http://discoveryvip.com/shared/json.php?f=quiz', function (response) {
        myData = response;
        buildPage();
    })
}

function buildPage() {
    var p = myData[page];
    var html = '';
    html += '<div class="question">' + p.question + '?</div>';
    for (var x = 0; x < p.answers.length; x++) {
        var answer = x == p.correct ? true : false;
        var aClass = userAnswer[page] == x ? 'active' : '';
        html += '<div class="' + aClass + '" data-id="' + answer + '" data-index="' + x + '">' + p.answers[x] + '</div>';
    }
    output.innerHTML = html;
}

function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status == 200) {
            callback(xhr.response);
        }
    }
    xhr.send();
}