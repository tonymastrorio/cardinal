$(document).ready(function() {
    // navigation click actions 
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');         
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});

// scroll function
function scrollToID(id, speed){
    var offSet = 90;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({scrollTop:targetOffset}, speed);
}
// if (typeof console === "undefined") {
//     console = {
//         log: function() { }
//     };
// }

// collapse navbar on click on small screens
$('.navbar-collapse ul li a').click(function(){ 
    $('.navbar-toggle:visible').click();
});

// control testimonials fadeIn/fadeOut
var span = $('#changeText'),
    text = [
    "\"Loved our experience at Rigby's! Best haircut my 4 year old son has ever had, thank you Nikki! Super friendly environment. We are new to Westchase and will be regular customers!\"", 
    "\"This place is great, the service is great, the cuts are great. Go Tia!\"", 
    "\"Shelly did an excellent job! She paid close attention to detail! I know where to go when I need a cut! I had a great experience!\"", 
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


