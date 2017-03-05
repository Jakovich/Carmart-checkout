'use strict';
$(document).ready(function() {
    //show/hide additional info in CASCO
    $('.casco-options__show').click(function(evt) {
        evt.preventDefault();
        if ($(this).hasClass('casco-options__show--more')) {
            $(this).text('Меньше параметров');
        } else {
            $(this).text('Все параметры');
        }

        $(this).toggleClass('casco-options__show--more').toggleClass('casco-options__show--less');
        $(this).closest('.casco-options').find('.casco-option__addit').slideToggle(300);
    });

    //switch casco/osago

    $('[data-tabcontent=insurance-osago]').hide();
    $('.insurance-nav__link').click(function(evt) {
        evt.preventDefault();
        $('.insurance-nav__link').removeClass('insurance-nav__link--active');
        $(this).addClass('insurance-nav__link--active');
        var currentItem = $('[data-tabcontent="' + this.dataset.tablink + '"]');
        var allItems = $('[data-tabcontent]');
        allItems.each(function() {
            $(this).hide();
        });
        currentItem.show();
    });
})
