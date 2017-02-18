$(document).ready(function() {

  //show/hide questions
  $('.faq__question').on('click', function(event){
  var currentIteml = $(event.target).closest('.faq__item');
  var answer = currentIteml.find('.faq__answer');
  answer.slideToggle(300);
  currentIteml.toggleClass('faq__item').toggleClass('faq__item faq__item--active');
  });

  $('.services__btn').on('mousedown', function(event){
    var currentItem = $(event.target).closest('.services__item');
    currentItem.addClass('services__item--focus');
  });
  $('.services__btn').on('mouseup', function(event){
    var currentItem = $(event.target).closest('.services__item');
    currentItem.removeClass('services__item--focus');
  });
  //add class active for services__item when add burron is clicked
});
