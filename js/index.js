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

    /* mini slider - смена картинок при движение мыши */
    // $('.mini-slider').each(function () {
    //     let slideLength = $(this).find('.mini-slider__slide').length;
    //     console.log(slideLength);
    //     for (let i = 0; i < slideLength; i++) {
    //         $(this).find('.mini-slider__dots').append('<li class="mini-slider__dot"></li>');
    //     }
    //     $(this).find('.mini-slider__slide:eq(0)').find('.mini-slider__slide__img').css('opacity', '1');
    //     $(this).find('.mini-slider__dots').find('.mini-slider__dot:eq(0)').addClass('mini-slider__dot--active');
    //     $(this).find('.mini-slider__slide').on('touchstart mouseover', function (event) {
    //         if ($(window).innerWidth() > 991) {
    //             // let thisOp = $(this).find('.mini-slider__slide').index();
    //             // $(this).addClass('this');
    //             console.log(this);
    //             $(this).find('.mini-slider__slide').find('.mini-slider__slide__img').css('opacity', '0');
    //             $(this).find(this).find('.mini-slider__slide__img').css('opacity', '1');

    //             // $(this).find('.mini-slider__dots').find('.mini-slider__dot').removeClass('mini-slider__dot--active');
    //             // $(this).find('.mini-slider__dots').find('.mini-slider__dot:eq(' + thisOp + ')').addClass('mini-slider__dot--active');
    //             event.stopPropagation();
    //             event.preventDefault();
    //         }
    //     });
    // });

    $('.mini-slider').each(function () {
        let slideLength = $(this).find('.mini-slider__slide').length;
        console.log(slideLength);
        for (let i = 0; i < slideLength; i++) {
            $(this).find('.mini-slider__dots').append('<li class="mini-slider__dot"></li>');
        }
        $(this).find('.mini-slider__slide:eq(0)').find('.mini-slider__slide__img').css('opacity', '1');
        $(this).find('.mini-slider__dots').find('.mini-slider__dot:eq(0)').addClass('mini-slider__dot--active');
        $(this).find('.mini-slider__slide').on('touchstart mouseover', function (event) {

            $(this).parent().find('.mini-slider__slide').find('.mini-slider__slide__img').css('opacity', '0');
            $(this).find('.mini-slider__slide__img').css('opacity', '1');
            let currentIndex = $(this).parent().find('.mini-slider__slide').index(this);
            $(this).parent().find('.mini-slider__dots').find('.mini-slider__dot').removeClass('mini-slider__dot--active');
            $(this).parent().find('.mini-slider__dots').find('.mini-slider__dot').eq(currentIndex).addClass('mini-slider__dot--active');
        });
    });

    const rangeSlider = document.getElementById('range-slider');

    if (rangeSlider) {            
        noUiSlider.create(rangeSlider, {
            start: [900, 2172017],
            connect: true,
            step: 1,
            range: {
                'min': [900],
                'max': [2172017],
            }
        });

        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');
        const inputs = [input0, input1];

        rangeSlider.noUiSlider.on('update', function(values, handle){
            inputs[handle].values = Math.round(values[handle]);
        });
    }
    
});