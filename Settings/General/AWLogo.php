<?php
namespace AllesWunder\Core\Settings\General;
// 2019-02-13
/** @method static AWLogo s() */
final class AWLogo extends \Df\Config\Settings {
	/**
	 * 2019-02-13
	 * "Make the AWQUALITY hover text editable"
	 * https://www.upwork.com/ab/f/contracts/21577315
	 * https://github.com/alleswunder2/core/issues/3
	 * @return string
	 */
	function hoverText() {return $this->v();}

	/**
	 * 2019-02-13
	 * @override
	 * @see \Df\Config\Settings::prefix()
	 * @used-by \Df\Config\Settings::v()
	 * @return string
	 */
	protected function prefix() {return 'alleswunder_core/aw_logo';}
}