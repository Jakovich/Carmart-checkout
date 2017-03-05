(function($) {
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
                wrap: 'circular'
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
})(jQuery);
