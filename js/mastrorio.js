
// var text = ["Craft Beer Drinker", "Dog Lover", "Movie Quoter", "Startup Junkie", "Entrepreneur", "Georgetown Hoya", "Customer Service Fanatic"];
// var counter = 0;
// var elem = document.getElementById("changeText");
// setInterval(change, 3000);
// function change() {
//  elem.innerHTML = text[counter];
//     counter++;
//     if(counter >= text.length) { counter = 0; }
// }


var span = $('#changeText'),
    text = ["Entrepreneur", "Dog Lover", "Movie Quoter", "Craft Beer Drinker", "Georgetown Hoya", "Startup Junkie"],
    count = 0;

function change() {
    span.fadeIn().delay(2000).fadeOut(function() {
        change();
    }).text(text[count++])
    if (count == text.length) {
        count = 0;
    }
}
change();