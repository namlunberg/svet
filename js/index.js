$(document).ready(function () {
    $('.info-top').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.info-bottom').slideToggle();
    });

    $('.filter-top').on('click', function () {
        $(this).toggleClass('active');
        $('.filter-bottom').slideToggle();
    });

    $('.priority-top').on('click', function () {
        $(this).toggleClass('active');
        $('.priority-bottom').slideToggle();
    });

    $('.priority-bottom-head__img').on('click', function () {
        $(this).toggleClass('active');
        $('.priority-bottom').slideToggle();
    });
});