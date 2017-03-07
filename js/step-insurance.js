'use strict';
$(document).ready(function() {
    //show/hide additional info in CASCO
    $('.casco-options__show').click(function(evt) {
        evt.preventDefault();
        var itemsStatus = $('.casco-options__status');
        if ($(this).hasClass('casco-options__show--more')) {
            $(this).text('Меньше параметров');
            itemsStatus.show(0);
        } else {
            $(this).text('Все параметры');
            itemsStatus.hide(0);
        }

        $(this).toggleClass('casco-options__show--more').toggleClass('casco-options__show--less');
        $(this).closest('.casco-options').find('.casco-option__item--addit').slideToggle(300);


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

    //select financial-item
      $('.financial__item').on('click', function(evt) {
          if (!$(evt.target).hasClass('financial__exp') && !$(evt.target).hasClass('step-btn') && !$(evt.target).hasClass('financial__documents-list')) {
              var allBancs = $('.financial__item');
              var currentBanc = $(this);
              if (currentBanc.hasClass('financial__item--select')) {
                  currentBanc.removeClass('financial__item--select');
              } else {
                  allBancs.removeClass('financial__item--select');
                  $(this).addClass('financial__item--select');
              }
          }
      });

      /*Sorting of financial*/
        $('[data-sorting]').on('click', function(event) {

            var currentItem = $(event.target).closest('.financial__column-name');
            var allItems = $('.financial__column-name');
            if (currentItem.hasClass('financial__column-name--active')) {
                currentItem.find('.sorting-icon').toggleClass('sorting-icon--down').toggleClass('sorting-icon--up');
            } else {

                allItems.each(function() {
                    $(this).removeClass('financial__column-name--active');
                    currentItem.addClass('financial__column-name--active');
                })

            }
        })


//show tooltip in driver-license__close
  $('[data-action="insurance-calcul"]').on('click', function(evt){
    evt.preventDefault();
    if ( $('[data-role="required"]').val() === "" ) {
      $('.driver-license__tooltip').fadeIn(100);
    }
  })

  $('[data-role="required"]').on('keyup', function() {
    $('.driver-license__tooltip').fadeOut(100);
  })


//inputmask for form of driver licence

  $('.drivers__form [name=insurance-number]') .inputmask("99 99 9999999", {
    "placeholder": " ",
    "showMaskOnHover": false

  });


})
