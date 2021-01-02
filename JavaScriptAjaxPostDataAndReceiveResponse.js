document.getElementById('sendData').addEventListener('click', myFunction);

function myFunction() {
    var txt = document.getElementById('idTxt').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.getElementById('output').innerHTML = this.responseText;
            console.log(this.responseText);
        }
    }
    xhr.open("post", "http://localhost/JavaScript/post.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("name=" + txt + "&age=50");
}