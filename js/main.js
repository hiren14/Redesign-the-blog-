

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop: true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});

	};
	carousel();

})(jQuery);

mobiscroll.setOptions({
    theme: 'material',
    themeVariant: 'light',
    clickToCreate: false,
    dragToCreate: false,
    dragToMove: false,
    dragToResize: false
});

$(function () {

    var inst = $('#demo-mobile-month-view').mobiscroll().eventcalendar({
        view: {
            calendar: { type: 'month' },
            agenda: { type: 'month' }
        },
        onEventClick: function (event, inst) {
            mobiscroll.toast({
                message: event.event.title
            });
        }
    }).mobiscroll('getInst');

    $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        inst.setEvents(events);
    }, 'jsonp');

});