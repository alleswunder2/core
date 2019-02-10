<?php
namespace AllesWunder\Core\Block;
use Magento\Framework\View\Element\Template as _P;
use Magento\Store\Api\StoreResolverInterface as IStoreResolver;
use Magento\Store\Model\Store as S;
// 2018-12-20
/** @final Unable to use the PHP «final» keyword here because of the M2 code generation. */
class Switcher extends _P {
	/**
	 * 2018-07-25
	 * @used-by vendor/alleswunder/core/view/frontend/templates/switcher.phtml
	 * @param S $s
	 * @return string
	 */
	final function name(S $s) {return dftr(substr($s->getCode(), -2), $this->map());}

	/**
	 * 2018-07-25
	 * @used-by vendor/alleswunder/core/view/frontend/templates/switcher.phtml
	 * @param S $s
	 * @return string
	 */
	final function post(S $s) {return df_post_h()->getPostData($this->getUrl('stores/store/switch'), [
		IStoreResolver::PARAM_NAME => $s->getCode(), '___from_store' => df_store_code()
	]);}

	/**
	 * 2018-07-25
	 * @used-by name()
	 * @return array(string => array(string => string))
	 */
	private function map() {return ['da' => 'Dansk', 'en' => 'English', 'fa' => 'فارسی', 'ru' => 'Русский'];}
}