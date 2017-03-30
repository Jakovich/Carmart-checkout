'use strict';
$(document).ready(function() {

    function addIcon(elem, target) {
        var currentIcon = $(elem).closest('.services__item').find('.services__icon img');
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
                left: target.offset().left + target.innerWidth()/2 - 10,
                width: '30px',
                height: '30px'
            }, 500,

            function() {
                $(this).remove()
            })
    }

    function addSale(elem) {
         addIcon(elem,'.info__price');
    }

    function addPrice(elem) {
         addIcon(elem,'.info__sum span');
    }


    $('main .services-btn').on('click', function(event) {
            if ($(this).hasClass('services-btn--select')) {
                addSale(this);
                addPrice(this);
            }
    })
});
