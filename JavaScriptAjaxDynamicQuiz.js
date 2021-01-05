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
    page = a;
    buildPage();
}
output.addEventListener('click', function () {
    userAnswer[page] = Number(event.target.dataset.index);
    for (var x = 0; x < this.children.length; x++) {
        this.children[x].classList.remove('active');
    }
    event.target.classList.add('active');
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
    html += '<div>' + p.question + '?</div>';
    for (var x = 0; x < p.answers.length; x++) {
        var answer = x == p.correct ? true : false;
        html += '<div data-id="' + answer + '" data-index="' + x + '">' + p.answers[x] + '</div>';
    }
    output.innerHTML = html;
    console.log(p);
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