//BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
//BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )
//document.forms.myForm.addEventListener('change',outputCal);
document.forms.myForm.onchange = outputCal;

function outputCal() {
    //console.log(event.target);
    function docId() {
        let r = document.querySelector(arguments[0]);
        r = (r.value == 'on') ? r.checked : Number(r.value);
        return r;
    }
    let age = docId('#age');
    let height = (docId('#heightFeet') * 12) + docId('#heightInches');
    let weight = docId('#weight');
    let lifeStyle = (docId('#lifeStyle') * 0.2) + 1;
    let result = docId('#m') ? lifeStyle * (66 + (6.2 * weight) + (12.7 * height) - (6.76 * age)) : lifeStyle * (655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age))
    document.getElementById('output').innerHTML = Math.round(result) + " calories needed per day.";
    document.getElementById('kilos').value = (docId('#weight') / 2.205).toFixed(1);
    document.getElementById('meters').value = ((docId('#heightFeet') + (docId('#heightInches') / 12)) / 3.28).toFixed(2);
}