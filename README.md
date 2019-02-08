A custom module for [alleswunder.com](https://alleswunder.com).

## How to install
```
composer clear-cache
bin/magento maintenance:enable
composer require alleswunder/core:*
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US ru_RU da_DK fa_IR --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy -f en_US ru_RU da_DK fa_IR  --area frontend --theme Pearl/weltpixel_custom
bin/magento maintenance:disable
bin/magento setup:upgrade
```

## How to update
```
bin/magento maintenance:enable
composer remove alleswunder/core
composer clear-cache
composer require alleswunder/core:*
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US ru_RU da_DK fa_IR --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy -f en_US ru_RU da_DK fa_IR  --area frontend --theme Pearl/weltpixel_custom
bin/magento maintenance:disable
bin/magento setup:upgrade
```

If you have problems with these commands, please check the [detailed instruction](https://mage2.pro/t/263).