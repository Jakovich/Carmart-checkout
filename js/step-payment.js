'use strict';

$(document).ready(function(){

//slider
    $(function() {
        var jcarousel = $('.payment-slider__jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 550) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.payment-slider__control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.payment-slider__control-next')
            .jcarouselControl({
                target: '+=1'
            });


    });

    //shopo/hide additionals blocks
    function showAddit(evt) {
        evt.preventDefault()
        var currentItem = $(evt.target).closest('.payment-summary__item');
        currentItem.find('.payment-summary__item-addit').slideToggle(300);
        currentItem.find('.payment-summary__caret').toggleClass('payment-summary__caret--up').toggleClass('payment-summary__caret--down');
    }
    $('.payment-summary__control').on('click', function(evt){
     showAddit(evt);
    });
    $('.payment-summary__item-name').on('click', function(evt){
     showAddit(evt);
    });

})
