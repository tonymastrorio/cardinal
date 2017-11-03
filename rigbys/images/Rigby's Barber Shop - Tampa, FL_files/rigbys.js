$('ul.nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
    $('body').animate({ scrollTop: $anchor.top - 90 });
    return false;
});

setCarouselHeight('#carousel-example');

    function setCarouselHeight(id)
    {
        var slideHeight = [];
        $(id+' .item').each(function()
        {
            // add all slide heights to an array
            slideHeight.push($(this).height());
        });

        // find the tallest item
        max = Math.max.apply(null, slideHeight);

        // set the slide's height
        $(id+' .carousel-content').each(function()
        {
            $(this).css('height',max+'px');
        });
    }


var span = $('#changeText'),
    text = [
    "Loved our experience at Rigby's! Best haircut my 4 year old son has ever had, thank you Nikki! Super friendly environment. We are new to Westchase and will be regular customers!", 
    "This place is great, the service is great, the cuts are great. Go Tia!", 
    "Shelly did an excellent job! She paid close attention to detail! I know where to go when I need a cut! I had a great experience!", 
    ],
    count = 0;

function change() {
    span.fadeIn().delay(5000).fadeOut(function() {
        change();
    }).text(text[count++])
    if (count == text.length) {
        count = 0;
    }
}
change();