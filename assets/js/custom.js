jQuery( document ).ready(function( $ ) {


	"use strict";


    
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
		if ($('.owl-client').length) {
            $('.owl-client').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    }
                }
            });
        }
        if ($('.owl-partners').length) {
            $('.owl-partners').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 4,
                        margin: 30
                    }
                }
            });
        }

        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })
    

    $(document).ready(function () {
		$('a[href^="#welcome"]').addClass('active');

		//smoothscroll
		$('.menu-item').on('click', function (e) {
			e.preventDefault();
			var athis = this;
			var target = this.hash,
				menu = target;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
				$('.menu-item').removeClass('active');
				$(athis).addClass('active');
			});
		});

		$(window).scroll(function (event) {
			var scrollPos = $(document).scrollTop() + 80;

			if (scrollPos === 0) {
				$('a[href^="#welcome"]').addClass('active');
				return;
			}
			$('.menu-item').not('[href=""]').not('[href="javascript:;"]').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));

				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('.menu-item').removeClass("active");
					currLink.addClass("active");
				} else {
					currLink.removeClass("active");
				}
			});
		})
	});

    // Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.dropdown').on('click', function () {
			if (width < 992) {
				$('.dropdown ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}
    
});
