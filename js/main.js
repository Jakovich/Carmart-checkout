$(document).ready(function() {

  //show/hide questions
  $('.faq__question').on('click', function(event){
  var currentItem = $(event.target).closest('.faq__item');
  var answer = currentItem.find('.faq__answer');
  answer.slideToggle(300);
  currentItem.toggleClass('faq__item').toggleClass('faq__item faq__item--active');
  });

  //show/hide additional info in section info
  $('.info__addit-btn').on('click', function(event){
    $('.info__addit').slideToggle(300);
  })

  $('.info__btn--more').on('click', function(event){
    $('.info__addit').slideToggle(300);
  })

  //add class active for services__item when add burron is clicked
  $('.services__btn').on('mousedown', function(event){
    var currentItem = $(event.target).closest('.services__item');
    currentItem.addClass('services__item--focus');
  });

  $('.services__btn').on('mouseup', function(event){
    var currentItem = $(event.target).closest('.services__item');
    currentItem.removeClass('services__item--focus');
    $(this).blur();
  });

  //add/delete select class for services-items
  $('.services__btn').on('click', function(event){
    var currentBtn = $(this);
    var currentItem = $(event.target).closest('.services__item');
    if (currentItem.hasClass('services__item--select')) {
      currentBtn.text('Установить');
    } else {
      currentBtn.text('Установлено');
    }
    currentItem.toggleClass('services__item').toggleClass('services__item services__item--select');
  });

  //toggle icon of sorting
  $('.sorting__icon').on('click', function() {
    $(this).toggleClass('sorting__icon--down').toggleClass('sorting__icon--up');
  });


  /*Credit Calculator*/

  $('.credit-calcul__term input').on('change', function(){
    $('.credit-calcul__sum').text($(this).val());
  });
});
