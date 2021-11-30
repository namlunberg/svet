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

    const rangeSlider1 = document.getElementById('range-slider-1');

    if (rangeSlider1) {            
        noUiSlider.create(rangeSlider1, {
            start: [0, 2172017],
            connect: true,
            step: 1,
            range: {
                'min': [0],
                'max': [2172017],
            }
        });

        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');
        const inputs = [input0, input1];

        rangeSlider1.noUiSlider.on('update', function(values, handle){

            const rangeValuesInputs = this.target.parentElement.parentElement            
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--min').value = Math.round(values[0])
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--max').value = Math.round(values[1])
            console.log(this)
        });
        let priceLimits = rangeSlider1.noUiSlider.get()
        document.querySelector('.filter-bottom-element-body-toddler-label__input--min').addEventListener('input', function (event) {
            console.log(event.target.value)
            priceLimits[0] = event.target.value
            rangeSlider1.noUiSlider.set(priceLimits)
        })
        document.querySelector('.filter-bottom-element-body-toddler-label__input--max').addEventListener('input', function (event) {
            console.log(event.target.value)
            priceLimits[1] = event.target.value
            rangeSlider1.noUiSlider.set(priceLimits)
        })        
    }

    const rangeSlider2 = document.getElementById('range-slider-2');

    if (rangeSlider2) {            
        noUiSlider.create(rangeSlider2, {
            start: [0, 1500],
            connect: true,
            step: 1,
            range: {
                'min': [0],
                'max': [1500],
            }
        });

        const input0 = document.getElementById('input-2');
        const input1 = document.getElementById('input-3');
        const inputs = [input0, input1];

        rangeSlider2.noUiSlider.on('update', function(values, handle){

            const rangeValuesInputs = this.target.parentElement.parentElement            
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--min').value = Math.round(values[0])
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--max').value = Math.round(values[1])
        });
        let priceLimits = rangeSlider2.noUiSlider.get()
        document.querySelector('.range-slider-2 .filter-bottom-element-body-toddler-label__input--min').addEventListener('input', function (event) {
            priceLimits[0] = event.target.value
            rangeSlider2.noUiSlider.set(priceLimits)
        })
        document.querySelector('.range-slider-2 .filter-bottom-element-body-toddler-label__input--max').addEventListener('input', function (event) {
            priceLimits[1] = event.target.value
            rangeSlider2.noUiSlider.set(priceLimits)
        })
    }
    
});