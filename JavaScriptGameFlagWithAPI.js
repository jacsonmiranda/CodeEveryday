window.onload = init;
var pick = "";

function init() {
    document.getElementById('myButton').addEventListener('click', myLoader, false);
    document.getElementById('myGuess').addEventListener('click', guessWord, false);
}

function myLoader() {
    var xHR = new XMLHttpRequest();
    xHR.onload = rOutput;
    xHR.open('get', 'https://restcountries.eu/rest/v2/all', true);
    xHR.send();
}

function guessWord() {
    var g = document.getElementById('guess').value;
    var userGuess = '';
    g.toLowerCase();
    for (var x = 0; x < pick.name.length; x++) {
        if (x >= g.length) {
            break;
        }
        console.log(g[x])
        console.log(pick.name[x])
        if (g[x] == pick.name[x].toLowerCase()) {
            userGuess += g[x];
            console.log(userGuess);
        }
        else {
            userGuess += '-';
        }
    }
    // toLowerCase
    document.getElementById('output2').innerHTML = userGuess;
}

function rOutput() {
    var myObj = JSON.parse(this.responseText);
    pick = myObj[Math.floor(Math.random() * myObj.length)];
    var ww = '';
    for (var x = 0; x < pick.name.length; x++) {
        ww += '-';
    }
    document.querySelector('img').src = pick.flag;
    document.getElementById('output1').innerHTML = shuffleWord(pick.name);
    document.getElementById('output2').innerHTML = ww;
}

function shuffleWord(w) {
    var response = '';
    w = w.split('');
    while (w.length > 0) {
        response += w.splice(Math.floor(Math.random() * w.length), 1);

    }
    return response.toLowerCase();
}