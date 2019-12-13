/**
 * Details exposant slider Block
 * @requires Swiper
 */
(function($) {
    $(function() {
        if ($('body').hasClass('exhibitor-details')) {
            //Show more btns
            var groups = $('.catal-ed-activity-group');
            groups.find('.js-hide-item').hide();
            groups.each(function(group) {
                $(group).find('.js-hide-trigger').click(function() {
                    $(group).find('.js-hide-item').toggle();
                });
            });
            var block = $('.catal-other-ex');
            // create navigation buttons
                        var sliderButtonContainer = $('<div class="exhibitors-slider__btn__container" />');
            var sliderButtonPrev = $('<button type="button" class="exhibitors-slider__btn exhibitors-slider__btn--prev" />');
            var sliderButtonNext = $('<button type="button" class="exhibitors-slider__btn exhibitors-slider__btn--next" />');
            sliderButtonContainer.append([ sliderButtonPrev, sliderButtonNext ]);
            block.find('h2').append(sliderButtonContainer);
            // attach and config swiper
                        new Swiper(block[0], {
                slidesPerView: 'auto',
                loop: false,
                isAutoplay: false,
                useActiveClasses: false,
                wrapperClass: 'catal-other-ex-list',
                slideClass: 'catal-other-ex-item',
                navigation: {
                    prevEl: '.exhibitors-slider__btn--prev',
                    nextEl: '.exhibitors-slider__btn--next',
                    disabledClass: 'disabled'
                }
            });
        }
    });
})(jQuery);
//# sourceMappingURL=details-exposant-slider.js.map