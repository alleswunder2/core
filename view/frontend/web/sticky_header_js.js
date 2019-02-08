// 2019-02-08
// "Remove white gaps from product lists in the mobile mode"
// https://github.com/alleswunder2/issues/issues/20
// https://www.upwork.com/ab/f/contracts/21555660
define(['jquery', 'mage/utils/wrapper'], function($, w) {'use strict';
return function(sb) {
$.extend(sb, {
	adjustHeaderPlaceholderHeight: w.wrap(sb.adjustHeaderPlaceholderHeight,
		function(_super, that, config, oldDesign) {
			if ('mobile' === oldDesign || 1000 < jQuery(window).width()) {
				_super(that, config, oldDesign);
			}
		}
	)
});
return sb;};});