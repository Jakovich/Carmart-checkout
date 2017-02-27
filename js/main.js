'use strict';
$(document).ready(function() {

    //show/hide questions
    $('.faq__question').on('click', function(event) {
        var currentItem = $(event.target).closest('.faq__item');
        var answer = currentItem.find('.faq__answer');
        answer.slideToggle(300);
        currentItem.toggleClass('faq__item').toggleClass('faq__item faq__item--active');
    });

    //show/hide additional info in section info
    $('.info__addit-btn').on('click', function(event) {
        $('.info__addit').slideToggle(300);
    })

    $('.info__btn--more').on('click', function(event) {
        $('.info__addit').slideToggle(300);
    })

    //add class active for services__item when add burron is clicked
    $('.services-btn').on('mousedown', function(event) {
        var currentItem = $(event.target).closest('.services__item');
        currentItem.addClass('services__item--focus');
    });

    $('.services-btn').on('mouseup', function(event) {
        var currentItem = $(event.target).closest('.services__item');
        currentItem.removeClass('services__item--focus');
        $(this).blur();
    });

    $('button').on('mouseup', function(event) {
        $(this).blur();
    });



    //add/delete select class for services-items
    $('.services-btn').on('click', function(event) {
        var currentBtn = $(this);

        var currentItem = $(event.target).closest('.services__item');
        if (currentBtn.hasClass('services-btn--select')) {
            currentBtn.text('Установить');
        } else {
            currentBtn.text('Установлено');
        }
        currentBtn.toggleClass('services-btn').toggleClass('services-btn services-btn--select');
        currentItem.toggleClass('services__item').toggleClass('services__item services__item--select');
    });

    //toggle icon of sorting
    $('.sorting-icon').on('click', function() {
        $(this).toggleClass('sorting-icon--down').toggleClass('sorting-icon--up');
    });

    //show/hide popup

    function showPopup(popup) {
        popup.fadeIn();
        $('.popup-wrp').fadeIn();
    }

    function hidePopup(popup) {
        popup.fadeOut();
        $('.popup-wrp').fadeOut();
    }

    $('[data-modal]').on('click', function(evt){
        evt.preventDefault();
        var currentPopup = $('[data-rel="' + this.dataset.modal + '"]');
        showPopup(currentPopup);
    });

    $('[data-action="close"]').on('click', function(evt){
        evt.preventDefault();
        var currentPopup = $(this).closest('[data-rel]');
        hidePopup(currentPopup);
    })

    $('.popup-wrp').on('click', function(evt) {
        var allPopups = $('[data-rel]');
            allPopups.each(function(){
                    hidePopup($(this));
            })
    })






});
