// Webpack Imports
import * as bootstrap from 'bootstrap';

(function () {
	'use strict';

	// Focus input if Searchform is empty
	[].forEach.call(document.querySelectorAll('.search-form'), (el) => {
		el.addEventListener('submit', function (e) {
			var search = el.querySelector('input');
			if (search.value.length < 1) {
				e.preventDefault();
				search.focus();
			}
		});
	});

	// Initialize Popovers: https://getbootstrap.com/docs/5.0/components/popovers
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl, {
			trigger: 'focus',
		});
	});

	toggleMenuMobile()
})();

function toggleMenuMobile() {
	const triggerMenu = document.querySelector('.navbar-toggler');
	
	triggerMenu.addEventListener('click', function () {
		const menu = document.querySelector('#navbar');

		if(!menu.classList.contains('opened')){
			menu.classList.add('opened')
		}else{
			menu.classList.remove('opened')
		}

		// THE MENU OPENED STATE IS CHANGED BY STYLING, USING POSITION TOP 100% -- see archiv _header.scss line 82
	})
}




