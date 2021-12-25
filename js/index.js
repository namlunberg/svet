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
        $('.priority-bottom').show();
    });

    $('.priority-bottom-head__img').on('click', function () {
        $('.priority-bottom').hide();
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

        rangeSlider1.noUiSlider.on('update', function (values, handle) {

            const rangeValuesInputs = this.target.parentElement.parentElement
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--min').value = Math.round(values[0])
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--max').value = Math.round(values[1])
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

        rangeSlider2.noUiSlider.on('update', function (values, handle) {

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

    const rangeSlider3 = document.getElementById('range-slider-3');

    if (rangeSlider3) {
        noUiSlider.create(rangeSlider3, {
            start: [0, 2172017],
            connect: true,
            step: 1,
            range: {
                'min': [0],
                'max': [2172017],
            }
        });

        const input0 = document.getElementById('input-4');
        const input1 = document.getElementById('input-5');
        const inputs = [input0, input1];

        rangeSlider3.noUiSlider.on('update', function (values, handle) {

            const rangeValuesInputs = this.target.parentElement.parentElement
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--min').value = Math.round(values[0])
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--max').value = Math.round(values[1])
        });
        let priceLimits = rangeSlider3.noUiSlider.get()
        document.querySelector('.filter-bottom-element-body-toddler-label__input--min').addEventListener('input', function (event) {
            console.log(event.target.value)
            priceLimits[0] = event.target.value
            rangeSlider3.noUiSlider.set(priceLimits)
        })
        document.querySelector('.filter-bottom-element-body-toddler-label__input--max').addEventListener('input', function (event) {
            console.log(event.target.value)
            priceLimits[1] = event.target.value
            rangeSlider3.noUiSlider.set(priceLimits)
        })
    }

    const rangeSlider4 = document.getElementById('range-slider-4');

    if (rangeSlider4) {
        noUiSlider.create(rangeSlider4, {
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

        rangeSlider4.noUiSlider.on('update', function (values, handle) {

            const rangeValuesInputs = this.target.parentElement.parentElement
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--min').value = Math.round(values[0])
            rangeValuesInputs.querySelector('.filter-bottom-element-body-toddler-label__input--max').value = Math.round(values[1])
        });
        let priceLimits = rangeSlider4.noUiSlider.get()
        document.querySelector('.range-slider-2 .filter-bottom-element-body-toddler-label__input--min').addEventListener('input', function (event) {
            priceLimits[0] = event.target.value
            rangeSlider4.noUiSlider.set(priceLimits)
        })
        document.querySelector('.range-slider-2 .filter-bottom-element-body-toddler-label__input--max').addEventListener('input', function (event) {
            priceLimits[1] = event.target.value
            rangeSlider4.noUiSlider.set(priceLimits)
        })
    }

    // let checkbox = $('.filter-bottom-element-body__span');
    // let filterCheckboxes = $('.filter-bottom-element-body__input');

    // filterCheckboxes.on('click', function () {
    //   if (checkbox.prop('checked') == true) {
    //     checkbox.prop('checked', false);
    //   } else {
    //     checkbox.prop('checked', true);
    //   }
    // });






    if (window.matchMedia('(min-width: 768px)').matches) {

        // Tabs switching

        $('.sitebar-buttons-button').on('click', function () {
            $('.sitebar-buttons-button').removeClass('active');
            $('.sitebar-choises-wrap').hide();

            let target = $(this).attr('data-target');

            $(this).addClass('active');
            $('.sitebar-choises-wrap[data-target=' + target + ']').show();
        });

        $('.sitebar-choises-wrap-head__img').on('click', function () {
            $('.sitebar-choises').hide();
        });

        $('.sitebar-buttons-button').on('click', function () {
            $('.sitebar-choises').show();
        });

        //Desktop & tablet menu

        $(".sitebar-buttons")
            .mouseenter(function () {
                $('.sitebar-buttons-button__desk').css('display', 'block');
                $('.sitebar-buttons-button__img').css('display', 'block');
                $('.sitebar-buttons-button-wrap').css('margin-right', '13px');
            })

            .mouseleave(function () {
                if ($(".sitebar-choises").is(':hover')) {
                    return;
                }
                $('.sitebar-buttons-button__desk').css('display', 'none');
                $('.sitebar-buttons-button__img').css('display', 'none');
                $('.sitebar-buttons-button-wrap').css('margin-right', '');

            })

        $(".sitebar-choises").mouseleave(function () {

            $('.sitebar-choises').css('display', 'none');
            $('.sitebar-buttons-button__desk').css('display', 'none');
            $('.sitebar-buttons-button__img').css('display', 'none');
            $('.sitebar-buttons-button-wrap').css('margin-right', '');
        })

    }



    // Mobile menu 

    let menuBtn = $('.header-mobile');
    let sitebar = $('.sitebar');
    let sitebarBtn = $('.sitebar-buttons-button');
    let sitebarMenuItem = $('.sitebar-buttons-button__desk');
    let sitebarMenuItemArrow = $('.sitebar-buttons-button__img');
    let sitebarMenuArrow = $('.sitebar-choices-wrap-head__btn');
    let sitebarMenuClose = $('.sitebar-choises-wrap-head__img');
    let sitebarSubMenu = $('.sitebar-choises');
    let sitebarBg = $('.sitebar-bg');
    let sitebarClose = $('.sitebar__close')

    function menuInitialState() {
        sitebar.css('left', '-100%');
        sitebarBtn.removeClass('active');
        $('.sitebar-choises-wrap').hide();
        sitebarSubMenu.css('left', '-300%');
        sitebarBg.css('opacity', '0');
        sitebarClose.css('display', 'none');
    }

    

    if (window.matchMedia('(max-width: 768px)').matches) {

        sitebarSubMenu.show();

        menuBtn.click(function () {
            sitebar.css('display', 'block');
            sitebar.css('left', '0%');
            sitebarMenuItem.css('display', 'block');
            sitebarMenuItemArrow.css('display', 'block');
            sitebarBg.css('opacity', '1');
            sitebarClose.css('display', 'inline-block');
        })

        sitebarBtn.click(function () {
            sitebar.css('left', '-60%');
            sitebarSubMenu.css('left', '100%');
            let target = $(this).attr('data-target');

            $(this).addClass('active');
            $('.sitebar-choises-wrap[data-target=' + target + ']').show();

        })

        sitebarMenuArrow.click(function () {
            sitebarSubMenu.css('left', '-140%');
            sitebarBtn.removeClass('active');
            sitebar.css('display', 'block');
            sitebar.css('left', '0%');
            setTimeout(() => {
                $('.sitebar-choises-wrap').hide();
            }, 500);
        })



        sitebarMenuClose.click(function () {
            menuInitialState();
        })

        sitebarClose.click(function () {
            menuInitialState();
        })

    }



    // Popup filter

    let filterMobileBtn = $('.filter-mobile__btn');
    let selectionPopup = $('.filter-popup-selection');
    let tabPopup = $('.filter-popup-tab');
    let tabPopupMenuItem = $('.filter-popup-bottom-tab');
    let closePopup = $('.filter-popup-top__close');
    let backBtn = $('.filter-popup-top__back');


    filterMobileBtn.click(function () {
        selectionPopup.addClass('show');
    })

    closePopup.click(function () {
        selectionPopup.removeClass('show');
        tabPopup.removeClass('show');
    })

    tabPopupMenuItem.click(function () {
        let target = $(this).attr('data-target');


        $('.filter-popup-tab[data-target=' + target + ']').addClass('show');
        
    })

    backBtn.click(function () {
        tabPopup.removeClass('show');
    })





});