'use-strict';
//select with radio button type of trade-in
$(document).ready(function(){

  function toggleTrade() {
    $('.trade-sale__item').removeClass('trade-sale__item--select');
    var checkedRadio = $("input[name=trade-in]:radio:checked");
    checkedRadio.closest('.trade-sale__item').addClass('trade-sale__item--select');
    var allItems = $('[data-trade]');
    var currentItem = $('[data-trade="' + checkedRadio.attr('id') + '"]');
    allItems.each(function() {
        $(this).hide();
    });
    currentItem.show();
  }

  toggleTrade();
  
  $('input[name=trade-in]').on('change', function() {
    toggleTrade();
  });




});
