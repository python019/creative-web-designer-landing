(function () {
    'use strict';
    
    // Preloader
	$("#preloader").fadeOut(400);
	$(".preloader-bg").delay(300).fadeOut(400);
    var wind = $(window);

    // Menu Navigation
    var OnePageNav = function () {
        var navToggler = $('.nilsbrown-js-nav-toggle');
        $(".smoothscroll[href^='#'], #nilsbrown-navbar ul li a[href^='#']").on('click', function (e) {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, 'easeInOutExpo', function () {
                window.location.hash = hash;
            });
        });
        $("#nilsbrown-navbar ul li a[href^='#']").on('click', function (e) {
            if (navToggler.is(':visible')) {
                navToggler.click();
            }
        });
    };
    OnePageNav();
    $(window).scroll(function () {
        var $this = $(this)
            , st = $this.scrollTop()
            , navbar = $('.nilsbrown-header')
            , logo = $(".nilsbrown-header .logo> img");
        if (st > 150) {
            if (!navbar.hasClass('scrolled')) {
                navbar.addClass('scrolled');
                logo.attr('src', 'images/logo-dark.png');
            }
        }
        if (st < 150) {
            if (navbar.hasClass('scrolled')) {
                navbar.removeClass('scrolled sleep');
                logo.attr('src', 'images/logo-dark.png');
            }
        }
        if (st > 350) {
            if (!navbar.hasClass('awake')) {
                navbar.addClass('awake');
            }
        }
        if (st < 350) {
            if (navbar.hasClass('awake')) {
                navbar.removeClass('awake');
                navbar.addClass('sleep');
            }
        }
    });
    $('.nilsbrown-js-nav-toggle').on('click', function (e) {
        var $this = $(this);
        e.preventDefault();
        if ($('body').hasClass('menu-open')) {
            $this.removeClass('active');
            $('.nilsbrown-menu .nilsbrown-menu-inner > ul > li').each(function (i) {
                var that = $(this);
                setTimeout(function () {
                    that.removeClass('is-show');
                }, i * 100);
            });
            setTimeout(function () {
                $('.nilsbrown-menu').removeClass('nilsbrown-menu-show');
            }, 800);
            $('body').removeClass('menu-open');
        }
        else {
            $('.nilsbrown-menu').addClass('nilsbrown-menu-show');
            $this.addClass('active');
            $('body').addClass('menu-open');
            setTimeout(function () {
                $('.nilsbrown-menu .nilsbrown-menu-inner > ul > li').each(function (i) {
                    var that = $(this);
                    setTimeout(function () {
                        that.addClass('is-show');
                    }, i * 100);
                });
            }, 500);
        }
    });
    $('.nilsbrown-menu .dropdown').hover(function () {
        var $this = $(this);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        $this.find('.dropdown-menu').addClass('show');
    }, function () {
        var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-menu').removeClass('show');
    });
    
    // Smooth Scrolling
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]').not('[href="#0"]').click(function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        }
                        else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    
    // Background Image 
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Services owlCarousel
    $('.services .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        mouseDrag: true,
        autoplay: false,
        dots: false,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Portfolio owlCarousel
    $('.portfolio .owl-carousel').owlCarousel({
        loop: true
        , margin: 15
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , nav: false
        , navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"]
        , autoplayHoverPause:true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Portfolio Page owlCarousel
    $('.portfolio-page .owl-carousel').owlCarousel({
        loop: true
        , margin: 15
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , nav: false
        , navText: ['<i class="ti-arrow-left" aria-hidden="true"></i>', '<i class="ti-arrow-right" aria-hidden="true"></i>']
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }); 
    
    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 10
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , nav: false
        , navText: ['<i class="ti-arrow-left" aria-hidden="true"></i>', '<i class="ti-arrow-right" aria-hidden="true"></i>']
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 2
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 4
            }
        }
    });
    
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: false,
        dots: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }); 
    
    // MagnificPopup
    $('.img-zoom').magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });

    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Parallaxie
    $('.parallaxie').parallaxie({
        speed: 0.2,
        size: "cover"
    });
    
    // Progress Skills
    var c4 = $('.circle');
    var myVal = $(this).attr('data-value');
    $(".sk-progress .circle").each(function () {

        c4.circleProgress({
            startAngle: -Math.PI / 2 * 1,
            value: myVal,
            thickness: 4,
            fill: {
              gradient: ["#18191d", "#868a9b"]
            }
        });

    });
    
    // Tooltip   
    $('[data-tooltip-tit]').hover(function () {
        $('<div class="div-tooltip-tit"></div>').text($(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
    }, function () {
        $('.div-tooltip-tit').remove();
    }).mousemove(function (e) {
        $('.div-tooltip-tit').css({ top: e.pageY + 10, left: e.pageX + 20 })
    });
    $('[data-tooltip-sub]').hover(function () {
        $('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
    }, function () {
        $('.div-tooltip-sub').remove();
    }).mousemove(function (e) {
        $('.div-tooltip-sub').css({ top: e.pageY + 60, left: e.pageX + 20 })
    });
    
    // Wow Animated 
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();
    
    // Splitting Text
    $(window).on("load", function () {
        Splitting();
    });
    
    // Accordion Box
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
          var outerBox = $(this).parents(".accordion-box");
          var target = $(this).parents(".accordion");

          if ($(this).next(".acc-content").is(":visible")) {
            //return false;
            $(this).removeClass("active");
            $(this).next(".acc-content").slideUp(300);
            $(outerBox).children(".accordion").removeClass("active-block");
          } else {
            $(outerBox).find(".accordion .acc-btn").removeClass("active");
            $(this).addClass("active");
            $(outerBox).children(".accordion").removeClass("active-block");
            $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
            target.addClass("active-block");
            $(this).next(".acc-content").slideDown(300);
          }
        });
      }
    
    // Reveal Effect
    var scroll = window.requestAnimationFrame
    ||
    // IE Fallback
    function (callback) {
      window.setTimeout(callback, 3000)
    };
    var elementsToShow = document.querySelectorAll('.reveal-effect');
    function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('animated');
      }
    });
    scroll(loop);
  }
    // Call the loop for the first time
    loop();
    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
        && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      || (rect.top >= 0
        && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
    // Magnet Cursor
    function magnetize(el, e) {
    var mX = e.pageX,
      mY = e.pageY;
    const item = $(el);
    const customDist = item.data('dist') * 20 || 80;
    const centerX = item.offset().left + (item.width() / 2);
    const centerY = item.offset().top + (item.height() / 2);
    var deltaX = Math.floor((centerX - mX)) * -0.35;
    var deltaY = Math.floor((centerY - mY)) * -0.35;
    var distance = calculateDistance(item, mX, mY);
    if (distance < customDist) {
      TweenMax.to(item, 0.5, {
        y: deltaY,
        x: deltaX,
        scale: 1
      });
      item.addClass('magnet');
    } else {
      TweenMax.to(item, 0.6, {
        y: 0,
        x: 0,
        scale: 1
      });
      item.removeClass('magnet');
    }
  }
    function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
  }
    function lerp(a, b, n) {
    return (1 - n) * a + n * b
  }
  
    // Mouse Cursor
    class Cursor {
    constructor() {
      this.bind()
      //seleziono la classe del cursore
      this.cursor = document.querySelector('.js-cursor')

      this.mouseCurrent = {
        x: 0,
        y: 0
      }

      this.mouseLast = {
        x: this.mouseCurrent.x,
        y: this.mouseCurrent.y
      }

      this.rAF = undefined
    }

    bind() {
      ['getMousePosition', 'run'].forEach((fn) => this[fn] = this[fn].bind(this))
    }

    getMousePosition(e) {
      this.mouseCurrent = {
        x: e.clientX,
        y: e.clientY
      }
    }

    run() {
      this.mouseLast.x = lerp(this.mouseLast.x, this.mouseCurrent.x, 0.2)
      this.mouseLast.y = lerp(this.mouseLast.y, this.mouseCurrent.y, 0.2)

      this.mouseLast.x = Math.floor(this.mouseLast.x * 100) / 100
      this.mouseLast.y = Math.floor(this.mouseLast.y * 100) / 100

      this.cursor.style.transform = `translate3d(${this.mouseLast.x}px, ${this.mouseLast.y}px, 0)`

      this.rAF = requestAnimationFrame(this.run)
    }

    requestAnimationFrame() {
      this.rAF = requestAnimationFrame(this.run)
    }

    addEvents() {
      window.addEventListener('mousemove', this.getMousePosition, false)
    }

    on() {
      this.addEvents()

      this.requestAnimationFrame()
    }

    init() {
      this.on()
    }
  }
    if ($('.js-cursor').length > 0) {
    const cursor = new Cursor()
    cursor.init();
      
  // Cursor Conditions
    $('.services .owl-theme .item, .portfolio .owl-theme .item, .testimonials .item, .gallery-item .item').hover(function () {
      $('.cursor').toggleClass('drag');
    });
      
    // Cursor Class Settings
    // $('a, ').hover(function () {
    // $('.cursor').toggleClass('light');
    // });
  }

    // Contact Form
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
         
}());