window.onload = init;

function init() {
    document.getElementById('search').addEventListener('click', ySearch, false);
}

function ySearch() {
    var searchTerm = document.getElementById('searchYoutube').value;
    var url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyB7Q97g-8bR8wp67SoyVJdKyCO0E-KedTg&q='+searchTerm;
    getJSON(url, function (data) {
        showResult(data.items);
    })
}

function showResult(results){
    var html = "";
    for(var value in results){
        console.log(results[value]);
        var title = results[value].snippet.title;
        var description = results[value].snippet.description;
        var thumbnail = results[value].snippet.thumbnails.default.url;
        console.log(thumbnail);
        html = html + '<div><h3>'+title+'</h3><p>'+description+'</p><img src="'+thumbnail+'"></div>';
    
    }
    document.getElementById('output1').innerHTML = html;
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