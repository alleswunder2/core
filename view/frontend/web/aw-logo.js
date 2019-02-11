// 2019-02-11
// "Add the AWQuality logo to all product pages of the AWQuality category"
// https://www.upwork.com/ab/f/contracts/21523399
// https://github.com/alleswunder2/core/issues/1
define(['jquery'], function($) {return (function() {
	var $img = $('.aw-logo > img');
	var open = false;
	var $w = $(window);
	/*$img.hover(
		function(e) {
			if (1119 < $w.width()) {
				var $this = $(this);
				if (!open) {
					e.preventDefault();
					$this.trigger('click.toggleDropdown');
					open = true;
				}
			}
		}
		,function(e) {
			if (1119 < $w.width()) {
				var $this = $(this);
				if (open) {
					e.preventDefault();
					$this.trigger('click.toggleDropdown');
					open = false;
				}
			}
		}
	); */
});});