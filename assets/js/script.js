/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";




	var Printox = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.PTXTITLEANIMATION();
				this.Animation();
				this.StickyHeader();
				this.MobileMenu();
				this.scrollTop();
				// this.TwinMax();
				this.CounterUp();
				this.searchPopUp();
				this.ProductQuickView();
				this.ProductZoom();
				this.TestimonialSliderOne();
				this.BlogSliderOne();
				this.MainSliderOne();
				this.MainSliderTwo();
				this.MainSliderThree();
				this.MainBannerFour();
				this.MainBannerFive();
				this.MainBannerSix();
				this.CategorySlider();
				this.ProgressBar();
				this.PortfolioSlider();
				this.TeamSlider();
				this.TestimonialSliderTwo();
				this.SponsorSlider1();
				this.CategorySliderTwo();
				this.FeaturedProductSlider();
				this.TestimonialSliderThree();
				this.VideoPlaySlider();
				this.QuickShopSlider();
				this.SponsorScroller();
				this.TestimonialSliderFour();
				this.PtxCountDown();
				this.TopSaleSlider();
				this.DealDaySlider();
				this.AnimateText();
				this.BlogListSlider();
				

				


				
				
			},
			preloader: function (){
				let preloader = document.querySelector("#preloader");
				window.addEventListener('load', function(){
					preloader.classList.add("preloaded");
					setTimeout(function () {
						preloader.remove();
					},1000);
				})
			},
			
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(".ptx-choose-action").on('click','li',function(){
					$(".ptx-choose-action li.active").removeClass("active"); 
					$(this).addClass("active"); 
				});
				$(document).ready(function() {
					$('#orderTab .nav-link').hover(function() {
						$(this).tab('show');
					});
				});
				$('.ptx-custom-bottom-img').marquee({
					speed: 8,
					gap: 0,
					delayBeforeStart: 0,
					direction: 'left',
					duplicated: true,
					pauseOnHover: false,
					startVisible:true,
				});
				if ($('.scene').length > 0 ) {
					$('.scene').parallax({
						scalarX: 10.0,
						scalarY: 10.0,
					}); 
				};
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				};
				$(document).ready(function(){
					gsap.registerPlugin(ScrollTrigger);

					let imageappear = document.querySelectorAll(".ptx-image-appear1");

					imageappear.forEach((container) => {
						let image = container.querySelector(".ptx-img-rvl_1");
						let ptx = gsap.timeline({
							scrollTrigger: {
								trigger: container,
								toggleActions: "play none none none",
								start: "top 90%",
								end: "top 0%",
							}
						});

						ptx.set(container, { autoAlpha: 1 });
						ptx.from(container, 1.5, {
							xPercent: 100,
							ease: Power2.out
						});
						ptx.from(image, 1.5, {
							xPercent: -100,
							scale: 1.3,
							delay: -1.5,
							ease: Power2.out
						});
					});
				});
				$(document).ready(function(){
					gsap.registerPlugin(ScrollTrigger);

					let imageappear = document.querySelectorAll(".ptx-image-appear2");

					imageappear.forEach((container) => {
						let image = container.querySelector(".ptx-img-rvl_2");
						let rts = gsap.timeline({
							scrollTrigger: {
								trigger: container,
								toggleActions: "play none none none",
							}
						});

						rts.set(container, { autoAlpha: 1 });
						rts.from(container, 1.5, {
							xPercent: 100,
							ease: Power2.out
						});
						rts.from(image, 1.5, {
							xPercent: -100,
							scale: 1.3,
							delay: -1.5,
							ease: Power2.out
						});
					});
				});
				$(document).ready(function(){
					gsap.registerPlugin(ScrollTrigger);

					let imageappear = document.querySelectorAll(".ptx-image-appear3");

					imageappear.forEach((container) => {
						let image = container.querySelector(".ptx-img-rvl_3");
						let rts = gsap.timeline({
							scrollTrigger: {
								trigger: container,
								toggleActions: "play none none none",
							}
						});

						rts.set(container, { autoAlpha: 1 });
						rts.from(container, 1.5, {
							xPercent: -100,
							ease: Power2.out
						});
						rts.from(image, 1.5, {
							xPercent: 100,
							scale: 1.3,
							delay: -1.5,
							ease: Power2.out
						});
					});
				});
				$(".contact-btn-item").on({
					mouseenter: function () {
						$(this).find(".co-btn-text span").shuffleLetters({});
					}
				});
				$(".ptx-about-feature-item-2").on({
					mouseenter: function () {
						$(this).find(".feature-text h3").shuffleLetters({});
					}
				});
				$(".ptx-how-we-do-ft-item").on({
					mouseenter: function () {
						$(this).find(".how-ft-text h3").shuffleLetters({});
					}
				});
			},
			PTXTITLEANIMATION: function(){
				if(window.innerWidth> 550){
					const textanim = document.querySelectorAll(".ptx_text");
					function setupSplits() {
						$(document).ready(function(){
							$(".split-line").wrap('<div class="split-parent"></div>');
						});
						textanim.forEach(ptx_text => {
							ptx_text.split = new SplitText(ptx_text, { 
								type: "lines,words,chars",
								linesClass: "split-line"
							});
							ptx_text.anim = gsap.from(ptx_text.split.lines, {
								scrollTrigger: {
									trigger: ptx_text,
									scrub: false,
									toggleActions: "play none none none",
									start: "bottom 100%",
									markers: false,
								},
								duration: 0.6, 
								yPercent: 100, 
								stagger: 0.2,
								ease: Power2.out
							});
						});
					}
					setupSplits();
				};
				let splitTextLines = gsap.utils.toArray(".ptx-text-anim p");
				splitTextLines.forEach(splitTextLine => {
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: splitTextLine,
							start: 'top 90%',
							duration: 2,
							end: 'bottom 60%',
							scrub: false,
							markers: false,
							toggleActions: 'play none none none'
						}
					});
					const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
					gsap.set(splitTextLine, { perspective: 400 });
					itemSplitted.split({ type: "lines" })
					tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
				});
				$(window).on('load', function(){
					const boxes = gsap.utils.toArray('.tx-animation-style1, .ptx-img-animation');
					boxes.forEach(img => {
						gsap.to(img, {
							scrollTrigger: {
								trigger: img,
								start: "top 70%",
								end: "bottom bottom",
								toggleClass: "active",
								once: true,
							}
						});
					});
				});
				
				$(document).ready(function() {
					var st = $(".tx-split-text");
					if(st.length == 0) return;
					gsap.registerPlugin(SplitText);
					st.each(function(index, el) {
						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});
						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('split-in-fade') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								ease: "Back.easeOut",
							});
						}
						if( $(el).hasClass('split-in-right') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								x: "50",
								ease: "Back.easeOut",
							});
						}
						if( $(el).hasClass('split-in-left') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								x: "-50",
								ease: "circ.out",
							});
						}
						if( $(el).hasClass('split-in-up') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								y: "80",
								ease: "circ.out",
							});
						}
						if( $(el).hasClass('split-in-down') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								y: "-80",
								ease: "circ.out",
							});
						}
						if( $(el).hasClass('split-in-rotate') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								rotateX: "50deg",
								ease: "circ.out",
							});
						}
						if( $(el).hasClass('split-in-scale') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								scale: "0.5",
								ease: "circ.out",
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
							},
							x: "0",
							y: "0",
							rotateX: "0",
							scale: 1,
							opacity: 1,
							duration: 0.8, 
							stagger: 0.02,
						});
					});
				});
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.ptx-header-section').addClass('sticky-on')
					} else {
						jQuery('.ptx-header-section').removeClass('sticky-on')
					}
				});
				$(document).ready(function () {
					$('.cart_close_btn, .body-overlay').on('click', function () {
						$('.cart_sidebar').removeClass('active');
						$('.body-overlay').removeClass('active');
					});

					$('.header-cart-btn').on('click', function () {
						$('.cart_sidebar').addClass('active');
						$('.body-overlay').addClass('active');
					});
				});
			},
			MobileMenu: function (){
				if ($(".mobile-menu").length) {
					$(".mobile-menu .ptx-navbar_dropdown-label").on("click", function() {
						$(this).parent().siblings().find(".ptx-navbar_sub-menu").slideUp(300);
						$(this)
						.parent()
						.siblings()
						.find(".ptx-navbar_dropdown-label")
						.removeClass("ptx-navbar_item-active");
						$(this).siblings(".ptx-navbar_sub-menu").slideToggle(300);
						$(this).toggleClass("ptx-navbar_item-active");
					});
				}

				$(".open-mobile-menu, .open-ptx-mobile-nav").on("click", function() {
					$(".mobile-menu__backdrop").addClass("mobile-menu__backdrop-active");
					$(".nav-fade").each(function(i) {
						$(this).css("animation-delay", 0.2 * 1 * i + "s");
					});

					$(".mobile-menu").addClass("show-menu");
					$(".mobile-menu__wrapper").removeClass("nav-fade-active");
				});

				$(".close-mobile-menu, .mobile-menu__backdrop").on("click", function() {
					setTimeout(function() {
						$(".mobile-menu").removeClass("show-menu");
					}, 900);
					setTimeout(function() {
						$(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
					}, 1100);

					$(".mobile-menu__wrapper").addClass("nav-fade-active");
				});
				if ($(".ptx-mobile-nav").length) {
					$(".ptx-mobile-menu .ptx-navbar_dropdown-label").on("click", function() {
						$(this).parent().siblings().find(".ptx-navbar_sub-menu").slideUp(300);
						$(this)
						.parent()
						.siblings()
						.find(".ptx-navbar_dropdown-label")
						.removeClass("ptx-navbar_item-active");
						$(this).siblings(".ptx-navbar_sub-menu").slideToggle(300);
						$(this).toggleClass("ptx-navbar_item-active");
					});
				}

				$(".open-ptx-mobile-nav").on("click", function() {
					$(".nav-fade").each(function(i) {
						$(this).css("animation-delay", 1 + 0.2 * 1 * i + "s");
					});

					$(".ptx-mobile-menu").addClass("show-ptx-mobile-menu");
					$(".ptx-mobile-menu__wrapper").removeClass("nav-fade-active");
				});

				$(".close-ptx-mobile-menu, .ptx-mobile-menu__backdrop").on(
					"click",
					function() {
						setTimeout(function() {
							$(".ptx-mobile-menu").removeClass("show-ptx-mobile-menu");
						}, 900);
						$(".ptx-mobile-menu__wrapper").addClass("nav-fade-active");
					}
					);
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				jQuery('.popup-video').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
				$('.zoom-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					closeOnContentClick: false,
					preloader: true,
					closeBtnInside: false,
					mainClass: 'mfp-with-zoom',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: false,
						duration: 300, 
						opener: function(element) {
							return element.find('img');
						}
					}
				});
				var ltn__active_item = $('.ptx-team-item-6')
				ltn__active_item.mouseover(function() {
					ltn__active_item.removeClass('active');
					$(this).addClass('active');
				});
			},
			ProductQuickView: function (){
				var quick_view = new Swiper(".product-details-slider-nav", {
					loop: true,
					spaceBetween: 15,
					slidesPerView: 4,
					navigation: {
						prevEl: ".views-button-prev",
						nextEl: ".views-button-next",
					},
					breakpoints: {  
						'1400': {
							slidesPerView: 4,
						},
						'1200': {
							slidesPerView: 4,
						},
						'1024': {
							slidesPerView: 4,
						},
						'991': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 3,
						},
						'577': {
							slidesPerView: 3,
						},
						'0': {
							slidesPerView: 3,
						},
					},
				});
				var swiper2 = new Swiper(".product-details-slider-for", {
					loop: true,
					spaceBetween: 0,
					speed: 1000,
					slidesPerView: 1,
					navigation: {
						prevEl: ".views-button-prev",
						nextEl: ".views-button-next",
					},
					thumbs: {
						swiper: quick_view,
					},
				});
				if($('.quantity-input-2').length) {
					$('.quantity-input-2').inputarrow({
						renderNext: function(input) {
							return $('<span class="custom-next"><i class="fal fa-plus"></i></span>').insertAfter(input);
						},
						renderPrev: function(input) {
							return $('<span class="custom-prev"><i class="fal fa-minus"></i></span>').insertBefore(input);
						},
						disabledClassName: 'custom-disabled'
					});
				};
				if($(".ptx-shop-feed-top").length) {
					var products = $(".products"),
					allButton = $(".ptx-view-btn a"),
					grid4 = $(".grid-4"),
					grid3 = $(".grid-3"),
					listView = $(".list-view");

					allButton.each(function() {
						var $this = $(this);
						$this.on("click", function(e) {
							e.preventDefault();
							$this.addClass("active").siblings().removeClass('active');
							e.stopPropagation();
						})
					});

					grid4.on("click", function(f) {
						products.removeClass("list-view three-column");
						products.addClass("default-column");
						f.stopPropagation();
					});

					grid3.on("click", function(g) {
						products.removeClass("default-column list-view");
						products.addClass("three-column");
						g.stopPropagation();
					});

					listView.on("click", function(h) {
						products.removeClass("default-column three-column");
						products.addClass("list-view");
						h.stopPropagation();
					});
				};
				if($("#slider-range").length) {
					$("#slider-range").slider({
						range: true,
						min: 0,
						max: 200,
						values: [0, 100],
						slide: function(event, ui) {
							$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
						}
					});

					$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
				}
			},
			ProductZoom: function(){
				$('.product-details-for').each(function(){
					$(this).find('img').zoomIt();
				});
			},
			// TwinMax: function (){
			// 	var $circleCursor = $(".cursor");

			// 	function moveCursor(e) {
			// 		var t = e.clientX + "px",
			// 		a = e.clientY + "px";
			// 		TweenMax.to($circleCursor, .2, {
			// 			left: t,
			// 			top: a,
			// 			ease: "Power1.easeOut"
			// 		})
			// 	}

			// 	function zoomCursor(e) {
			// 		TweenMax.to($circleCursor, .1, {
			// 			scale: 3,
			// 			ease: "Power1.easeOut"
			// 		}), $($circleCursor).removeClass("cursor-close")
			// 	}

			// 	function closeCursor(e) {
			// 		TweenMax.to($circleCursor, .1, {
			// 			scale: 3,
			// 			ease: "Power1.easeOut"
			// 		}), $($circleCursor).addClass("cursor-close")
			// 	}

			// 	function defaultCursor(e) {
			// 		TweenLite.to($circleCursor, .1, {
			// 			scale: 1,
			// 			ease: "Power1.easeOut"
			// 		}), $($circleCursor).removeClass("cursor-close")
			// 	}
			// 	$(window).on("mousemove", moveCursor),
			// 	$("a, button, .zoom-cursor").on("mouseenter", zoomCursor),
			// 	$(".trigger-close").on("mouseenter", closeCursor),
			// 	$("a, button, .zoom-cursor, .trigger-close, .trigger-plus").on("mouseleave", defaultCursor);
			// },
			searchPopUp: function (){
				$('.search-btn').on('click', function() {
					$('.search-body').toggleClass('search-open');
				});
			},
			CounterUp: function (){
				$('.counter').counterUp({
					delay: 15,
					time: 1500,
				});
			},
			TestimonialSliderOne: function (){
				var slider = new Swiper('.ptx-testimonial-slider', {
					spaceBetween: 45,
					slidesPerView: 3,
					roundLengths: true,
					loop: true,
					loopAdditionalSlides: 30,
					speed: 1000,
					breakpoints: {
						'1600': {
							slidesPerView: 3,
						},
						'1500': {
							slidesPerView: 3,
						},
						'1400': {
							slidesPerView: 3,
						},
						'1300': {
							slidesPerView: 3,
						},
						'992': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 1,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			BlogSliderOne: function (){
				var slider = new Swiper('.ptx-blog-slider-1', {
					spaceBetween: 45,
					slidesPerView: 3,
					roundLengths: true,
					loop: true,
					loopAdditionalSlides: 30,
					speed: 1000,
					breakpoints: {
						'1600': {
							slidesPerView: 3,
						},
						'1500': {
							slidesPerView: 3,
						},
						'1400': {
							slidesPerView: 3,
						},
						'1300': {
							slidesPerView: 3,
						},
						'992': {
							slidesPerView: 2,
						},
						'768': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 1,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			MainSliderOne: function (){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider101"] = {once: RS_MODULES.modules["revslider101"]!==undefined ? RS_MODULES.modules["revslider101"].once : undefined, init:function() {
					window.revapi10 = window.revapi10===undefined || window.revapi10===null || window.revapi10.length===0  ? document.getElementById("rev_slider_10_1") : window.revapi10;
					if(window.revapi10 === null || window.revapi10 === undefined || window.revapi10.length==0) { window.revapi10initTry = window.revapi10initTry ===undefined ? 0 : window.revapi10initTry+1; if (window.revapi10initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider101"].init()}); return;}
					window.revapi10 = jQuery(window.revapi10);
					if(window.revapi10.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_10_1"); return;}
					revapi10.revolutionInit({
						revapi:"revapi10",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1280,1024,778,480",
						gridheight:"935,768,650,580",
						perspective:600,
						perspectiveType:"global",
						editorheight:"935,768,650,580",
						responsiveLevels:"1240,1024,778,480",
						progressBar:{disableProgressBar:true},
						navigation: {
							wheelCallDelay:1000,
							onHoverStop:false,
							arrows: {
								enable:true,
								style:"hesperiden",
								left: {
									h_offset:30
								},
								right: {
									h_offset:30
								}
							}
						},
						parallax: {
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
							type:"mouse",
							origo:"slidercenter",
							speed:0,
							disable_onmobile:true
						},
						scrolleffect: {
							set:true,
							multiplicator:1.3,
							multiplicator_layers:1.3
						},
						sbtimeline: {
							set:true
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}} 
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			MainSliderTwo: function (){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider111"] = {once: RS_MODULES.modules["revslider111"]!==undefined ? RS_MODULES.modules["revslider111"].once : undefined, init:function() {
					window.revapi11 = window.revapi11===undefined || window.revapi11===null || window.revapi11.length===0  ? document.getElementById("rev_slider_11_1") : window.revapi11;
					if(window.revapi11 === null || window.revapi11 === undefined || window.revapi11.length==0) { window.revapi11initTry = window.revapi11initTry ===undefined ? 0 : window.revapi11initTry+1; if (window.revapi11initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider111"].init()}); return;}
					window.revapi11 = jQuery(window.revapi11);
					if(window.revapi11.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_11_1"); return;}
					revapi11.revolutionInit({
						revapi:"revapi11",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1280,1024,778,480",
						gridheight:"935,768,720,600",
						spinner:"spinner1",
						perspective:600,
						perspectiveType:"global",
						editorheight:"935,768,720,600",
						responsiveLevels:"1240,1024,778,480",
						progressBar: {
							color:"linear-gradient(105deg, rgba(229,25,128,1) 0%, rgba(103,45,140,1) 100%)",
							size:5,
							reset:"animate"
						},
						navigation: {
							wheelCallDelay:1000,
							onHoverStop:false,
							arrows: {
								enable:true,
								style:"hesperiden",
								left: {
									anim:"bottom",
									container:"layergrid",
									h_align:"center",
									v_align:"bottom",
									h_offset:-40,
									v_offset:35
								},
								right: {
									container:"layergrid",
									h_align:"center",
									v_align:"bottom",
									h_offset:40,
									v_offset:35
								}
							}
						},
						parallax: {
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
							type:"mouse",
							origo:"slidercenter",
							speed:0
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}} 
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			MainSliderThree: function (){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider121"] = {once: RS_MODULES.modules["revslider121"]!==undefined ? RS_MODULES.modules["revslider121"].once : undefined, init:function() {
					window.revapi12 = window.revapi12===undefined || window.revapi12===null || window.revapi12.length===0  ? document.getElementById("rev_slider_12_1") : window.revapi12;
					if(window.revapi12 === null || window.revapi12 === undefined || window.revapi12.length==0) { window.revapi12initTry = window.revapi12initTry ===undefined ? 0 : window.revapi12initTry+1; if (window.revapi12initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider121"].init()}); return;}
					window.revapi12 = jQuery(window.revapi12);
					if(window.revapi12.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_12_1"); return;}
					revapi12.revolutionInit({
						revapi:"revapi12",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1240,1024,778,480",
						gridheight:"1000,768,700,600",
						perspective:600,
						perspectiveType:"global",
						editorheight:"1000,768,700,600",
						responsiveLevels:"1240,1024,778,480",
						progressBar: {
							color:"linear-gradient(rgba(73,81,254,1) 0%, rgba(219,58,169,1) 100%)",
							size:5
						},
						navigation: {
							onHoverStop:false
						},
						parallax: {
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
							type:"scroll",
							origo:"slidercenter",
							speed:0
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}} 
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			MainBannerFour: function (){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider131"] = {once: RS_MODULES.modules["revslider131"]!==undefined ? RS_MODULES.modules["revslider131"].once : undefined, init:function() {
					window.revapi13 = window.revapi13===undefined || window.revapi13===null || window.revapi13.length===0  ? document.getElementById("rev_slider_13_1") : window.revapi13;
					if(window.revapi13 === null || window.revapi13 === undefined || window.revapi13.length==0) { window.revapi13initTry = window.revapi13initTry ===undefined ? 0 : window.revapi13initTry+1; if (window.revapi13initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider131"].init()}); return;}
					window.revapi13 = jQuery(window.revapi13);
					if(window.revapi13.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_13_1"); return;}
					revapi13.revolutionInit({
						revapi:"revapi13",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1280,1024,778,480",
						gridheight:"1040,768,700,650",
						spinner:"spinner0",
						perspective:600,
						perspectiveType:"global",
						editorheight:"1040,768,700,650",
						responsiveLevels:"1240,1024,778,480",
						progressBar:{disableProgressBar:true},
						navigation: {
							onHoverStop:false
						},
						parallax: {
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
							type:"mouse",
							origo:"slidercenter",
							speed:0
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}} 
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			MainBannerFive: function (){
				jQuery(window).on('load', function(){
					var slider = new Swiper('.ptx-main-slider-5', {
						spaceBetween: 0,
						slidesPerView: 1,
						roundLengths: true,
						loop: true,
						speed: 1000,
						effect: "fade",
						// autoplay: {
						// 	enabled: true,
						// 	delay: 6000
						// },
						pagination: {
							el: ".swiper-main-paginations",
							clickable: true,
						},
						navigation: {
							prevEl: ".main_slider-button-prev",
							nextEl: ".main_slider-button-next",
						},
					});
				});
			},
			MainBannerSix: function (){
				jQuery(window).on('load', function(){
					var slider = new Swiper('.ptx_main_slide_6', {
						spaceBetween: 0,
						slidesPerView: 1,
						roundLengths: true,
						loop: true,
						speed: 1000,
						effect: "fade",
						pagination: {
							el: ".swiper-main-pagination2",
							clickable: true,
						},
						// autoplay: {
						// 	enabled: true,
						// 	delay: 6000
						// },
						navigation: {
							prevEl: ".main_slider-button-prev2",
							nextEl: ".main_slider-button-next2",
						},
					});
				});
			},
			CategorySlider: function (){
				var slider = new Swiper('.ptx-category-slider', {
					spaceBetween: 40,
					slidesPerView: 4,
					roundLengths: true,
					speed: 1000,
					navigation: {
						prevEl: ".category-button-prev",
						nextEl: ".category-button-next",
					},
					breakpoints: {
						'1600': {
							slidesPerView: 4,
						},
						'1500': {
							slidesPerView: 4,
						},
						'1400': {
							slidesPerView: 4,
						},
						'1300': {
							slidesPerView: 4,
						},
						'992': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 2,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			ProgressBar: function (){
				$(document).ready(function () {
					if ($(".progress-bar").length) {
						var $progress_bar = $('.progress-bar');
						$progress_bar.appear();
						$(document.body).on('appear', '.progress-bar', function() {
							var current_item = $(this);
							if (!current_item.hasClass('appeared')) {
								var percent = current_item.data('percent');
								current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
							}

						});
					};
				});
			},
			AnimateText: function(){   
				let elements = document.querySelectorAll(".btn-text");
				elements.forEach((element) => {
					let innerText = element.innerText;
					element.innerHTML = "";

					let textContainer = document.createElement("div");
					textContainer.classList.add("block");

					for (let letter of innerText) {
						let span = document.createElement("span");
						span.innerText = letter.trim() === "" ? "\xa0" : letter;
						span.classList.add("letter");
						textContainer.appendChild(span);
					}

					element.appendChild(textContainer);
					element.appendChild(textContainer.cloneNode(true));
				});

			},
			PortfolioSlider: function (){
				var slider = new Swiper('.ptx-portfolio-slider', {
					spaceBetween: 0,
					slidesPerView: 4,
					speed: 1000,
					breakpoints: {
						'1600': {
							slidesPerView: 4,
						},
						'1500': {
							slidesPerView: 4,
						},
						'1400': {
							slidesPerView: 4,
						},
						'1300': {
							slidesPerView: 4,
						},
						'992': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 1,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			TeamSlider: function (){
				var slider = new Swiper('.ptx-team-slider-2', {
					spaceBetween: 40,
					slidesPerView: 3,
					roundLengths: true,
					loop: true,
					loopAdditionalSlides: 30,
					speed: 1000,
					navigation: {
						prevEl: ".team-button-prev",
						nextEl: ".team-button-next",
					},
					breakpoints: {
						'1250': {
							slidesPerView: 3,
						},
						'992': {
							slidesPerView: 2,
						},
						'768': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 1,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			TestimonialSliderTwo: function (){
				var slider = new Swiper('.ptx-testimonial-slider-2', {
					spaceBetween: 0,
					slidesPerView: 1,
					roundLengths: true,
					loop: true,
					speed: 1000,
					navigation: {
						prevEl: ".testi-button-prev",
						nextEl: ".testi-button-next",
					},
				});
			},
			SponsorSlider1: function (){
				var slider = new Swiper('.ptx-sponsor-slider', {
					spaceBetween: 105,
					slidesPerView: 5,
					roundLengths: true,
					loop: true,
					loopAdditionalSlides: 30,
					autoplay: {
						enabled: true,
						delay: 6000
					},
					speed: 400,
					breakpoints: {
						'1600': {
							slidesPerView: 5,
						},
						'1200': {
							slidesPerView: 4,
						},
						'992': {
							slidesPerView: 4,
						},
						'768': {
							slidesPerView: 4,
						},
						'576': {
							slidesPerView: 3,
							spaceBetween: 50,
						},
						'0': {
							slidesPerView: 2,
						},
					},
				});
			},
			CategorySliderTwo: function (){
				var slider = new Swiper('.ptx-category-slider-2', {
					spaceBetween: 50,
					slidesPerView: 5,
					roundLengths: true,
					loopAdditionalSlides: 30,
					navigation: {
						prevEl: ".cat-button-prev",
						nextEl: ".cat-button-next",
					},
					speed: 400,
					breakpoints: {
						'1600': {
							slidesPerView: 5,
						},
						'1200': {
							slidesPerView: 4,
						},
						'992': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 3,
						},
						'576': {
							slidesPerView: 2,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			FeaturedProductSlider: function (){
				var slider = new Swiper('.ptx-featured-product-slider', {
					spaceBetween: 0,
					slidesPerView: 1,
					roundLengths: true,
					loop: true,
					speed: 1000,
					navigation: {
						prevEl: ".ft-button-prev",
						nextEl: ".ft-button-next",
					},
				});
			},
			TestimonialSliderThree: function (){
				var slider = new Swiper('.ptx-testimonial-slider-3', {
					spaceBetween: 0,
					slidesPerView: 1,
					roundLengths: true,
					loop: true,
					speed: 1000,
					navigation: {
						prevEl: ".testi-button-prev_2",
						nextEl: ".testi-button-next_2",
					},
				});
			},
			VideoPlaySlider: function (){
				var slider = new Swiper('.ptx-video-slider', {
					spaceBetween: 0,
					slidesPerView: 1,
					roundLengths: true,
					loop: true,
					speed: 1000,
					effect: "fade",
					navigation: {
						prevEl: ".video-button-prev",
						nextEl: ".video-button-next",
					},
				});
				var $grid = $('.grid').imagesLoaded( function() {
					$grid.masonry({
						percentPosition: true,
						itemSelector: '.grid-item',
						columnWidth: '.grid-sizer'
					}); 
				});
				let imageBins = gsap.timeline({
					scrollTrigger: {
						trigger: ".ptx-img-zoom",
						start: "top bottom",
						markers: false,
						scrub: 1,
						end: "bottom center"
					}
				})
				imageBins.to(".ptx-img-zoom img", {
					scale: 1.15,
					duration: 1,
				});
			},
			QuickShopSlider: function (){
				var slider = new Swiper('.ptx-quick-shop-slider', {
					spaceBetween: 15,
					slidesPerView: 7,
					roundLengths: true,
					loop: true,
					autoplay: {
						enabled: true,
						delay: 6000
					},
					speed: 1000,
					breakpoints: {
						'1600': {
							slidesPerView: 7,
						},
						'1200': {
							slidesPerView: 5,
						},
						'992': {
							slidesPerView: 4,
						},
						'768': {
							slidesPerView: 4,
						},
						'576': {
							slidesPerView: 3,
						},
						'0': {
							slidesPerView: 2,
						},
					},
				});
			},
			SponsorScroller: function (){
				$('.ptx-sponsor-scroller-1').marquee({
					speed: 60,
					gap: 20,
					delayBeforeStart: 0,
					direction: 'left',
					duplicated: true,
					pauseOnHover: false,
					startVisible:true,
				});
				$('.ptx-sponsor-scroller-2').marquee({
					speed: 60,
					gap: 20,
					delayBeforeStart: 0,
					direction: 'right',
					duplicated: true,
					pauseOnHover: false,
					startVisible:true,
				});
				$('.ptx-bottom-scroller').marquee({
					speed: 60,
					gap: 5,
					delayBeforeStart: 0,
					direction: 'left',
					duplicated: true,
					pauseOnHover: false,
					startVisible:true,
				});
			},
			TestimonialSliderFour: function (){
				var Testimonial_nav_2 = new Swiper(".mySwiper", {
					slidesPerView: 3,
					centeredSlides: true,
					loop: true,
					roundLengths: true,
					navigation: {
						prevEl: ".tx-test-button-prev",
						nextEl: ".tx-test-button-next",
					},
					breakpoints: {  
						'1400': {
							slidesPerView: 3,
						},
						'1300': {
							slidesPerView: 1,
							centeredSlides: true,
						},
						'1200': {
							slidesPerView: 1,
							centeredSlides: true,
						},
						'992': {
							slidesPerView: 1,
							centeredSlides: false,
						},
						'768': {
							slidesPerView: 1,
							centeredSlides: false,
						},
						'576': {
							slidesPerView: 1,
							centeredSlides: false,

						},
						'0': {
							slidesPerView: 1,
							centeredSlides: false,
						},
					},
				});
				var swiper2 = new Swiper(".mySwiper2", {
					slidesPerView: 3,
					centeredSlides: true,
					loop: true,
					spaceBetween: 40,
					roundLengths: true,
					navigation: {
						prevEl: ".tx-test-button-prev",
						nextEl: ".tx-test-button-next",
					},
					breakpoints: {  
						'1400': {
							slidesPerView: 3,
						},
						'1300': {
							slidesPerView: 2,
							centeredSlides: true,
						},
						'1200': {
							slidesPerView: 1,
							centeredSlides: true,
						},
						'992': {
							slidesPerView: 1,
							centeredSlides: false,
						},
						'768': {
							slidesPerView: 1,
							centeredSlides: false,
						},
						'576': {
							slidesPerView: 1,
							centeredSlides: false,

						},
						'0': {
							slidesPerView: 1,
							centeredSlides: false,
						},
					},
					thumbs: {
						swiper: Testimonial_nav_2,
					},
				});
			},
			PtxCountDown:  function (){
				$('.countdown_timer').each(function(){
					$('[data-countdown]').each(function() {
						var $this = $(this), finalDate = $(this).data('countdown');
						$this.countdown(finalDate, function(event) {
							var $this = $(this).html(event.strftime(''
								+ '<li class="days_count"><strong>%D</strong><span>Days</span></li>'
								+ '<li class="hours_count"><strong>%H</strong><span>Hours</span></li>'
								+ '<li class="minutes_count"><strong>%M</strong><span>Mins</span></li>'
								+ '<li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'));
						});
					});
				});	
			},
			TopSaleSlider: function (){
				var slider = new Swiper('.ptx-top-sale-slider', {
					direction: 'vertical',
					slidesPerView: 4,
					spaceBetween: 15,
					speed: 1000,
					navigation: {
						prevEl: ".left_arrow_1",
						nextEl: ".right_arrow_1",
					},
				});
				var slider = new Swiper('.ptx-top-sale-slider-2', {
					direction: 'vertical',
					slidesPerView: 4,
					spaceBetween: 15,
					speed: 1000,
					navigation: {
						prevEl: ".left_arrow_2",
						nextEl: ".right_arrow_2",
					},
				});
				var slider = new Swiper('.ptx-top-sale-slider-3', {
					direction: 'vertical',
					slidesPerView: 4,
					spaceBetween: 15,
					speed: 1000,
					navigation: {
						prevEl: ".left_arrow_3",
						nextEl: ".right_arrow_3",
					},
				});
			},
			DealDaySlider: function (){
				var slider = new Swiper('.ptx-deal-day-slider', {
					spaceBetween: 20,
					slidesPerView: 5,
					autoplay: {
						enabled: true,
						delay: 6000
					},
					navigation: {
						nextEl: ".tx-deal-button-next",
						prevEl: ".tx-deal-button-prev",
					},
					speed: 1000,
					breakpoints: {
						'1600': {
							slidesPerView: 5,
						},
						'1200': {
							slidesPerView: 4,
						},
						'992': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 1,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			BlogListSlider: function (){
				var slider = new Swiper('.blog-img-slider', {
					slidesPerView: 1,
					spaceBetween: 15,
					speed: 1000,
					navigation: {
						prevEl: ".blog_list_left_1",
						nextEl: ".blog_list_right_1",
					},
				});
			},
		}
	}

	jQuery(document).ready(function (){
		Printox.init();
	});

})();