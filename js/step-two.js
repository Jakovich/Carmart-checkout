'use strict';
$(document).ready(function() {
/*Credit Calculator*/

  $('.credit-calcul__term input').on('change', function() {
      $('.credit-calcul__sum').text($(this).val());
  });

  /*Credit range slider*/
  var rangeSlider = document.querySelector('.credit-calcul__range');
  //slider init
  noUiSlider.create(rangeSlider, {
      start: [42],
      range: {
          'min': [0],
          'max': [100]
      },
      format: wNumb({
          decimals: 0,
          postfix: '%',
      }),
      animate: true,
    animationDuration: 100,
      pips: {
          mode: 'positions',
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          density: 10,
          format: wNumb({
              decimals: 0,
              postfix: '%',
          })

      }
  });

  function addActiveClass(step) {
      var steps = document.querySelectorAll("[data-step]");
      if(!step.classList.contains('credit-calcul__condition--active')) {
          for ( var i=0; i < steps.length; i++) {
              if (steps[i].classList.contains('credit-calcul__condition--active')){
                  steps[i].classList.remove('credit-calcul__condition--active')
              }
          }
      step.classList.add('credit-calcul__condition--active');
      }
  }

  $('.noUi-value').on('click', function(){
      var currentSum = $(this).text();
      var currentNumber = parseInt(currentSum);
      rangeSlider.noUiSlider.set(currentNumber);
  })

  //show value
  var inputPercent = document.querySelector('.credit-calcul__fee-percent');
  rangeSlider.noUiSlider.on('update', function( values, handle ) {
          var currentValue = values[handle];
          var currentNumber = parseInt(currentValue);

          var step1 = document.querySelector("[data-step='1']");
          var step2 = document.querySelector("[data-step='2']");
          var step3 = document.querySelector("[data-step='3']");

          if (currentNumber <= 30) {
              addActiveClass(step1);
          } else if (currentNumber >30 && currentNumber <= 55) {
               addActiveClass(step2)
          } else if (currentNumber > 55){
              addActiveClass(step3)
          }
       inputPercent.innerHTML = '(' + currentValue + ')';
  });

  //select banc-item
  $('.bancs__item').on('click', function(){
    var allBancs = $('.bancs__item');
    allBancs.removeClass('bancs__item--select');
    $(this).addClass('bancs__item--select')
  })


  });
