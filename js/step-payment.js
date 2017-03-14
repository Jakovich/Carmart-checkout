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
                wrap: 'circular',
                animation: {
                duration: 150,
                easing:   'linear'
                }
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

    //show/hide info in popup PAT
    $('.popup-pat__show').click(function(evt) {
        evt.preventDefault();
        if ($(this).hasClass('popup-pat__show--more')) {
            $(this).text('Cкрыть  опции');
        } else {
            $(this).text('Показать опции пакета');
        }

        $(this).toggleClass('popup-pat__show--more').toggleClass('popup-pat__show--less');
        $(this).closest('.popup-pat__item').find('.popup-pat__info-body').slideToggle(300);

    });

    //add/delete select class for popup PAT items

    $('.popup-pat .services-btn').on('click', function(event) {
      //cancel popup show when we click on service-item
      event.stopPropagation();
      var currentBtn = $(this);
      var titleWrp = $('.popup-pat__selected span');
      var currentItem = $(event.target).closest('.popup-pat__item');
      var currentTitle = currentItem.find('.popup-pat__name').text();
      titleWrp.text(currentTitle);

      var allBtns = $('.popup-pat .services-btn');
      allBtns.each(function() {
          $(this).removeClass('services-btn--select');
          $(this).text('Выбрать');
      });
      currentBtn.text('Выбрано');
      currentBtn.addClass('services-btn--select');
      var allItems = $('.popup-pat__item');
      allItems.each(function() {
          $(this).removeClass('popup-pat__item--select');
      });

      currentItem.addClass('popup-pat__item--select');

  });

})
