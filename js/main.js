$(document).ready(function() {

  //show/hide questions
  $('.faq__question').on('click', function(event){
  var currentIteml = $(event.target).closest('.faq__item');
  var answer = currentIteml.find('.faq__answer');
  answer.slideToggle(300);
  currentIteml.toggleClass('faq__item').toggleClass('faq__item faq__item--active');
  });
});
