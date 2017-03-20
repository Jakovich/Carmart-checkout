'use strict';
$(document).ready(function() {

    //show/hide questions
    $('.faq__question').on('click', function(event) {
        var currentItem = $(event.target).closest('.faq__item');
        var answer = currentItem.find('.faq__answer');
        answer.slideToggle(300);
        currentItem.toggleClass('').toggleClass('faq__item--active');
    });

    //show/hide additional info in section info
    $('.info__addit-btn').on('click', function(event) {
      $(event.target).closest('.info').find('.info__addit').slideToggle(300);
      $(event.target).closest('.info-fluid').find('.info-short').slideToggle(300);
    })

    $('.info__btn--more').on('click', function(event) {
        $(event.target).closest('.info').find('.info__addit').slideToggle(300);
        $(event.target).closest('.info-fluid').find('.info-short').slideToggle(300);
    })

    //unblur links & buttons after click

    $('button').on('mouseup', function(event) {
        $(this).blur();
    });

    $('a').on('mouseup', function(event) {
        $(this).blur();
    });


    //toggle icon of sorting
    $('.sorting-icon').on('click', function() {
        $(this).toggleClass('sorting-icon--down').toggleClass('sorting-icon--up');
    });

    //show short check

    $(window).scroll(function(){
        //element['fade'+ ($(this).scrollTop() > 400 ? 'In': 'Out')](500);
        if ($(this).scrollTop() > 350) {
             $('.info-fluid').fadeIn();
        } else {
            $('.info-fluid').fadeOut();
        }
    });


    //show/hide popup

    function showPopup(popup) {
        popup.fadeIn();
        $('.popup-wrp').fadeIn();
    }

    function hidePopup(popup) {
        popup.fadeOut();
        if($('[data-rel]:visible').length === 1) {
            $('.popup-wrp').fadeOut();

        }
    }

    $('[data-modal]').on('click', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        var currentPopup = $('[data-rel="' + this.dataset.modal + '"]');
        showPopup(currentPopup);
    });

    $('[data-action="close"]').on('click', function(evt){
        evt.preventDefault();
        var currentPopup = $(this).closest('[data-rel]');
        hidePopup(currentPopup);
    })

    $('.popup-wrp').on('click', function(evt) {
            hidePopup($('[data-rel]:visible:last'));
    })


});
