<?php

/**
 * Stargazing theme for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    the-turk/flarum-stargazing-theme
 * @author     Hasan Özbey <hasanoozbey@gmail.com>
 * @copyright  2020
 * @license    The MIT License
 * @version    Release: 0.1.0-beta.1
 * @link       https://github.com/the-turk/flarum-stargazing-theme
 */

// namespace TheTurk\Stargazing;

use Flarum;
// use Flarum\Foundation\Application;
// use Flarum\Frontend\Assets;
// use Flarum\Frontend\Compiler\Source\SourceCollector;

return [
    (new Flarum\Extend\Frontend('forum'))
        ->css(__DIR__.'/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Flarum\Extend\Frontend('admin'))
        ->css(__DIR__.'/less/forum.less'),
    (new Flarum\Extend\Locales(__DIR__ . '/locale'))
];
