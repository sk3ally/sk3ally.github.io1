
var navbarClicked = 0;
var navbarOpened = 0;

$("#ham").click(function () {
    navbarClicked++;

    if (navbarClicked % 2 !== 0) {
        navbarOpened = 1;
    } else {
        navbarOpened = 0;
    }
});


var section1 = $('#section1');
var section2 = $('#section2');
var section3 = $('#section3');
var section4 = $('#section4');

$(window).scroll(function () {

    if ($(this).scrollTop() < section1.height() - 38 && navbarOpened === 0) {
        $(".line").css({"stroke": "#fff"});
    }

    if ($(this).scrollTop() > section1.height() - 38 && navbarOpened === 0) {
        $(".line").css({"stroke": "#000"});
    }

    if ($(this).scrollTop() > section1.height() + section2.height() - 38 && navbarOpened === 0) {
        $(".line").css({"stroke": "#fff"});
    }

    if ($(this).scrollTop() > section1.height() + section2.height() + section3.height() - 38 && navbarOpened === 0) {
        $(".line").css({"stroke": "#000"});
    }
});

let nav = $("nav")
$(".menu").click(function (e) {
    $(this).toggleClass("open")
    $(".overlay").toggleClass("open")
    $("nav").toggleClass("nav_slide_down")
    if (nav.hasClass('nav_slide_down')) {
        $(".line").css({"stroke": "#000"});
    } else $(".line").css({"stroke": "#fff"});
});


$(".nav_item").click(function (e) {
    $(".menu").toggleClass("open")
    $(".overlay").toggleClass("open")
    $("nav").toggleClass("nav_slide_down")
    $("#ham").toggleClass("active")
    $("hamRotate180").toggleClass("active")
    navbarOpened = 0;
});