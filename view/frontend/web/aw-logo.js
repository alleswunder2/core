// 2019-02-11
// "Add the AWQuality logo to all product pages of the AWQuality category"
// https://www.upwork.com/ab/f/contracts/21523399
// https://github.com/alleswunder2/core/issues/1
define(['jquery'], function($) {return (function() {
	var $img = $('.aw-logo > img');
	var open = false;
	$img.hover(
		function(e) {
			var $this = $(this);
			if (!open) {
				e.preventDefault();
				$this.trigger('click.toggleDropdown');
				open = true;
			}
		}
		,function(e) {
			var $this = $(this);
			if (open) {
				e.preventDefault();
				$this.trigger('click.toggleDropdown');
				open = false;
			}
		}
	);
});});