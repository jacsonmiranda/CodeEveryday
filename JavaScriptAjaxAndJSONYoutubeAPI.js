window.onload = init;

function init() {
    document.getElementById('search').addEventListener('click', ySearch, false);
}

function ySearch() {
    var searchTerm = document.getElementById('searchYoutube').value;
    var url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyB7Q97g-8bR8wp67SoyVJdKyCO0E-KedTg&q=test&maxResults=20';
    getJSON(url, function (data) {
        console.log(data);
    })
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