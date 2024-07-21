/*global jQuery:false */
jQuery(document).ready(function($) {
"use strict";

		//mobile nav
		const mobileNav = document.querySelector('.mobile_nav');
		const mobileGnbs = document.querySelectorAll('.mobile_nav .gnb_text');
		const mobileLnbs = document.querySelectorAll('.mobile_nav .lnb_wrapper');
		const IS_OPEN = 'is_open';
		const lnbItemHeight = 36;
		const lnbItemPadding = 10 * 2;

		function toggleMobileLnb(event) {
			for(let j = 0; j < mobileGnbs.length; j++) {
				if(event.target !== mobileGnbs[j]) {
					mobileGnbs[j].parentNode.classList.remove(IS_OPEN);
					mobileGnbs[j].nextElementSibling.style.maxHeight = 0;
				}
			}

			if(event.target.parentNode.classList.contains(IS_OPEN)) {
				event.target.parentNode.classList.remove(IS_OPEN);
				event.target.nextElementSibling.style.maxHeight = 0;
			} else {
				event.target.parentNode.classList.add(IS_OPEN);
				event.target.nextElemnetSibling.style.maxHeight = event.target.nextElementSibling.children[0].children.length * lnbItemHeight + lnbItemPadding + 'px';
			}
		}

		for(let i = 0; i < mobileGnbs.length; i++) {
			mobileGnbs[i].addEventListener('click', toggleMobileLnb);
		}

		//burger btn
		const burgerBtn = document.querySelector('.burger_btn');

		function toggleMobileNav(event) {
			if(event.target.classList.contains(IS_OPEN)) {
				burgerBtn.classList.remove(IS_OPEN);
				mobileNav.classList.remove(IS_OPEN);
			} else {
				burgerBtn.classList.add(IS_OPEN);
				mobileNav.classList.add(IS_OPEN);
			}
		}

		burgerBtn.addEventListener('click', toggleMobileNav);

		//¸®»çÀÌÂ¡
		window.addEventListener('resize', function(){
			burgerBtn.classList.remove(IS_OPEN);
			mobileNav.classList.remove(IS_OPEN);
			for(let j = 0; j < mobileGnbs.length; j++) {
				mobileGnbs[j].parentNode.classList.remove(IS_OPEN);
				mobileGnbs[j].nextElemnetSibling.style.maxHeight = 0;
			}
		})

		//add some elements with animate effect
		$(".box").hover(
			function () {
			$(this).find('span.badge').addClass("animated fadeInLeft");
			$(this).find('.ico').addClass("animated fadeIn");
			},
			function () {
			$(this).find('span.badge').removeClass("animated fadeInLeft");
			$(this).find('.ico').removeClass("animated fadeIn");
			}
		);
		
	(function() {

		var $menu = $('.navigation nav'),
			optionsList = '<option value="" selected>Go to..</option>';

		$menu.find('li').each(function() {
			var $this   = $(this),
				$anchor = $this.children('a'),
				depth   = $this.parents('ul').length - 1,
				indent  = '';

			if( depth ) {
				while( depth > 0 ) {
					indent += ' - ';
					depth--;
				}

			}
			//$(".nav li").parent().addClass("bold");
			//optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
		}).end()
		
	})();

		//Navi hover
		$('.global_nav .gnb_item').hover(function () {
			$(this).find('.lnb_list').stop(true, true).addClass('on');
		}, function () {
			$(this).find('.lnb_list').stop(true, true).removeClass('on');
		});

		//$('.global_nav .gnb_item').hover(function () {
		//	$(this).find('.lnb_list').stop(true, true).addClass('on');
		//}, function () {
		//	$(this).find('.lnb_list').stop(true, true).removeClass('on');
		//});

		$('.mobile_nav .gnb_item').click(function () {
			$(this).find('.lnb_list').stop(true, true).toggleClass('on');
			$(this).find('.gnb_arrow').stop(true, true).toggleClass('tn');
		});



});