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