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
    var infoWrp = $('.info__wrp');
    var infoAddit = $('.info__addit');
    var infoShort = $('.info-short');


    function infoToggle(event) {
        infoAddit.slideToggle(300);

        if (infoWrp.hasClass('info__wrp--fixed')) {
            infoShort.slideToggle(300);
        }
    }

    $('.info__addit-btn').on('click', function(event) {
      infoToggle(event);
  });

    $('.info__btn--more').on('click', function(event) {
        infoToggle(event);
    });

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
        if ($(this).scrollTop() > 450) {
            if (!infoWrp.hasClass('info__wrp--fixed')) {
                infoWrp.fadeOut(0, function(){
                    $('main').addClass('main-padding');
                    infoWrp.addClass('info__wrp--fixed').fadeIn(200);
                    infoAddit.fadeOut(0);
                })
            }
        } else {
            if (infoWrp.hasClass('info__wrp--fixed')) {
                infoWrp.fadeOut(200, function(){
                    $('main').removeClass('main-padding');
                    infoWrp.removeClass('info__wrp--fixed').fadeIn(0);
                    infoAddit.fadeOut(0);
                })
            }
        }
    });


    //show/hide popup


    function showPopup(popup) {
        popup.fadeIn();
        popup.closest($('.popup-wrp')).fadeIn();
    }

    function hidePopup(popup) {
        popup.fadeOut();
        popup.closest($('.popup-wrp')).fadeOut();
    }

    $('[data-rel]').on('click', function(evt){
        evt.stopPropagation();
    });

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
    });

    $('.popup-wrp').on('click', function(evt) {
            hidePopup($('[data-rel]:visible:last'));
    });

});
