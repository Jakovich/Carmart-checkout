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
  });
  
});
