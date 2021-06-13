"use strict;"
new WOW().init();
var rtl = $('html[dir=rtl]');
$(document).ready(function () {
	$('#lang').niceSelect();
	$('#lang-m').niceSelect();
	$(document).on('click','button.navbar-toggler',function () {
		$('.side-nav').toggleClass("show");
	});
	$(document).on('click', 'button.close-btn', function() {
		$('.side-nav').removeClass("show");
	});
	$('.statistics-bars').LineProgressbar({
		percentage: 90
	});
	$('.bar-inner').LineProgressbar( {
		percentage: 90
	});
	$('#gandar').niceSelect();
	$('#department').niceSelect();
	$('#doctors').niceSelect();
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  fade: true,
	  asNavFor: '.slider-nav',
	  prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-rounded-left\"  aria-hidden='true'></i></button>",
	  nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-rounded-right\"  aria-hidden='true'></i></button>",
	  rtl: true
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  arrows: false,
	  centerMode: false,
	  focusOnSelect: true,
	  rtl: true,
	  responsive: [
	  	{
	  		breakpoint:1500,
	  		settings: {
	  			slidesToShow: 3
	  		}
	  	},
	  	{
	  		breakpoint:1100,
	  		settings: {
	  			slidesToShow: 2
	  		}
	  	},
	  	{
	  		breakpoint: 768,
	  		settings: {
	  			slidesToShow: 3,
	  			trl:false,
	  			centerMode: true,
	  			variableWidth:true
	  		}
	  	},
	  	{
	  		breakpoint: 576,
	  		settings: {
	  			slidesToShow: 1
	  		}
	  	}
	  ]
	});
	if(rtl.length == true) {
		$('.research-slider').slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  dots: false,
		  rtl: true,
		  prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-rounded-left\"  aria-hidden='true'></i></button>",
		  nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-rounded-right\"  aria-hidden='true'></i></button>",
			responsive: [
				{
					breakpoint:1500,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint:1100,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
						
					}
				},
				{
					breakpoint: 385,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	} else {
		$('.research-slider').slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  dots: false,
		  prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-rounded-left\"  aria-hidden='true'></i></button>",
		  nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-rounded-right\"  aria-hidden='true'></i></button>",
			responsive: [
				{
					breakpoint:1500,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint:1100,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
						
					}
				},
				{
					breakpoint:385,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}
		
	
	$('.zoom-icon').magnificPopup({
	  type: 'image',
	  // other options
	  mainClass: 'mfp-with-zoom',
	  zoom: {
	      enabled: true,
	      duration: 300,
	      easing: 'ease-in-out',
	      opener: function(openerElement) {
	        return openerElement.is('img') ? openerElement : openerElement.find('img');
	      }
	    }
	});
		$('.timeline-for').on('init', function(event, slick){
	  var dots = $( '.slick-dots li' );
	  dots.each( function( k, v){
	    $(this).find( 'button' ).addClass( 'heading'+ k );
	  });
	  var items = slick.$slides;
	  items.each( function( k, v){
	      var text = $(this).find( 'h3 .year' ).text();
	      $( '.heading' + k ).text(text);
	  });
	});
	$('.timeline-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		asNavFor: '.timeline-nav',
		arrows:false,
	});
	$('.timeline-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows:false,
		asNavFor: '.timeline-for',
		focusOnSelect: true,
		
	});
});
