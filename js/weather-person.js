$(document).ready(function() {

// Set initial counters
var cloud_counter = 1;
var sun_counter = 1;
var storm_counter = 1;

// Change to male icon
$("#male").click(function() {
    makeMale();
});

// Change to female icon
$("#female").click(function() {
    makeFemale();
});

// Change color of person icon
$(".color-btn").click(function() {
    $(".color-btn").removeClass("active btn-primary");
    $(this).addClass("active btn-primary");
    $("#person-gender").css("color", $(this).text());
});

function makeMale() {
    $("#female").removeClass("active btn-primary");
    $(this).addClass("active btn-primary");
    $("#person-gender").removeClass("fa-female");
    $("#person-gender").addClass("fa-male");
}

function makeFemale() {
    $("#male").removeClass("active btn-primary");
    $(this).addClass("active btn-primary");
    $("#person-gender").removeClass("fa-male");
    $("#person-gender").addClass("fa-female");
}

// Handle click on cloudy button
$("#cloudy").click(function(){
    if (sun_counter == 0) {
        hideSun();
    }
    if (storm_counter == 0) {
        hideStorm();
    }
    if (cloud_counter == 1) {
        displayCloud();
    } else {
        hideCloud();
    }
});

// Handle click on sunny button
$("#sunny").click(function(){
    if (cloud_counter == 0) {
        hideCloud();
    }
    if (storm_counter == 0) {
        hideStorm();
    }
    if (sun_counter == 1) {
        displaySun();
    } else {
        hideSun();
    }
});

// Handle click on stormy button
$("#stormy").click(function() {
    if (sun_counter == 0) {
        hideSun();
    } 
    if (cloud_counter == 0) {
        hideCloud();
    }
    if (storm_counter == 1) {
        displayStorm();
    } else {
        hideStorm();
    }
});

function displaySun() {
    $("#sunny").addClass("btn-primary");
        $("#sun").animate({
            marginLeft: "+=50%",
        }, 1000 );

        $("#sunglasses").animate({
            marginLeft: "+=60.5%",
        }, 1000 );

        sun_counter = 0;
}

function hideSun() {
    $("#sunny").removeClass("btn-primary");
    $("#cloudy").removeClass("btn-primary");
    $("#sun").animate({
        marginLeft: "-=50%",
        }, 1000 );

    $("#sunglasses").animate({
        marginLeft: "-=60.5%",
        }, 1000 );
    sun_counter = 1;

}

function displayCloud() {
    $("#cloudy").addClass("btn-primary");
    $("#cloud").animate({
        marginLeft: "+=58%",
        }, 1000 );
    cloud_counter = 0;
}

function hideCloud() {
    $("#cloudy").removeClass("btn-primary");
    $("#cloud").animate({
        marginLeft: "-=58%",
        }, 1000 );
    cloud_counter = 1;
}

function displayStorm() {
    $("#stormy").addClass("btn-primary");
    $("#storm").animate({
        marginLeft: "+=58%",
        }, 1000 );
    storm_counter = 0;
    runBehindTree();
}

function hideStorm() {
    $("#stormy").removeClass("btn-primary");
    $("#storm").animate({
        marginLeft: "-=58%",
        }, 1000 );
    storm_counter = 1;
    returnFromTree();
}

function runBehindTree() {
    $("#person-container").animate({
        paddingRight: "+=50%",
    }, 1000 );
}

function returnFromTree() {
    $("#person-container").animate({
        paddingRight: "-=50%",
    }, 1000 );
}

});


// For effect after first effect is finished:

// $("#sun").animate({
//             marginLeft: "-=50%",
//         }, 1000, function(){
//             sun_counter = 1;
//             $("#sun").css("display", "none")
//         });