'use strict';
$(document).ready(function() {

    function addIcon(context, target) {
        var currentIcon = $(context).closest('.services__item').find('.services__icon img');
        var target = $(target);
        var iconClone = currentIcon.clone().appendTo("body");
        iconClone.css({
            top: $(currentIcon).offset().top,
            left: $(currentIcon).offset().left,
            width: $(currentIcon).innerWidth(),
            height: $(currentIcon).innerHeight(),
            position: 'absolute',
            'z-index': 90

        })

        iconClone.animate({
                top: target.offset().top,
                left: target.offset().left + target.innerWidth() / 2 - 10,
                width: '30px',
                height: '30px'
            }, 500,

            function() {
                $(this).remove();

            })
    }



    function blink(elem,color) {
        var priceAuto = $(elem);
        priceAuto.css({
            color: '#00ab8a'
        })

        setTimeout(function() {
            priceAuto.css({
                color: color
            })
        }, 200)

    }



    $('main .services__items .row:nth-child(1) .services-btn').on('click', function(event) {
        var target = '.info__price';
        if ($(this).hasClass('services-btn--select')) {
            addIcon(this, target);
            setTimeout(function() {
                $(target).html('1 200 500 Р');
                blink(target, '#ffffff');
            }, 550)
        }
    });

    $('main .services__items .row:nth-child(2) .services-btn').on('click', function(event) {
        var target = '.info__sum span';
        if ($(this).hasClass('services-btn--select')) {
            addIcon(this, target);
            setTimeout(function() {
                $(target).html('1 500 000 Р');
                blink(target, 'rgba(255,255,255,0.7)');
            }, 550)
        }
    })


});
