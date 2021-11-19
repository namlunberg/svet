$(document).ready(function () {
    $('.info-top').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.info-bottom').slideToggle();
    });
});