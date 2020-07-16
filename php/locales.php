<?php 

/**
 * Gets a list of all available locales on the current server
 * and filters them depending on a given 2-char language code. 
 */
$locales = ResourceBundle::getLocales('');

$code = 'de';
$suggested = [];

foreach ($locales as $locale) {
    if (Str::startsWith($locale, $code)) {
        $suggested[] = $locale;
    }
}

dump($suggested);
