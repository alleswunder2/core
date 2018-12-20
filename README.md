A custom module for [alleswunder.com](https://alleswunder.com).

## How to install
```
composer clear-cache
composer require alleswunder/core:*
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US ru_RU --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy -f en_US ru_RU --area frontend --theme Pearl/weltpixel_custom
```

## How to update
```
composer clear-cache
composer update alleswunder/core
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US ru_RU --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy -f en_US ru_RU --area frontend --theme Pearl/weltpixel_custom
```

If you have problems with these commands, please check the [detailed instruction](https://mage2.pro/t/263).