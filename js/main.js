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
    var infoWrp = $('.info');
    var infoAddit = $('.info__addit');
    var infoShort = $('.info__short');
    var tooltipWrp = $('.tooltip-info__wrp');


    function infoToggle(event) {
        infoAddit.slideToggle(300);

        if (infoWrp.hasClass('info--fixed')) {
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


function addTooltipTop() {
      var menuHeight = infoWrp.innerHeight() - 1 + 'px';
      tooltipWrp.css({'top':menuHeight});
}


    //stick menu

    function toggleMenu() {
      if ($(window).scrollTop() > 400) {

          if (!infoWrp.hasClass('info--fixed')) {
            var menuHeight = infoWrp.innerHeight() + 'px';
            $('main').css({'padding-top': menuHeight});
            infoWrp.addClass('info--fixed').fadeIn(300);
              /*infoWrp.fadeOut(0, function(){



              })*/
          }

          if(!tooltipWrp.hasClass('tooltip-info__wrp--fixed')) {
            addTooltipTop()
            tooltipWrp.addClass('tooltip-info__wrp--fixed');
          }

      } else {
          if (infoWrp.hasClass('info--fixed')) {
              infoWrp.fadeOut(0, function(){
                  $('main').css({'padding-top': '0px'});
                  infoWrp.removeClass('info--fixed').fadeIn(0);

              })
          }
          if(tooltipWrp.hasClass('tooltip-info__wrp--fixed')) {
            tooltipWrp.removeClass('tooltip-info__wrp--fixed');
          }
      }
    }

    toggleMenu();

    $(window).scroll(function(){
      toggleMenu();
    });

    $(window).resize(function() {
      if(tooltipWrp.hasClass('tooltip-info__wrp--fixed')) {
        addTooltipTop()
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
