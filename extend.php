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

namespace TheTurk\Stargazing;

use Flarum\Extend;
use Flarum\Foundation\Application;
use Flarum\Frontend\Assets;
use Flarum\Frontend\Compiler\Source\SourceCollector;
use TheTurk\Stargazing;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js')
        ->content(function Document $document) {
            $document->body[] = '
            <script type="text/javascript" src="/assets/bubbly-bg.js"></script>
            window.onload = function (e) {
                bubbly({
                    blur: 0.7,
                    bubbleFunc: () => `hsla(${Math.random() * 360}, 0%, 100%, ${Math.random() * 0.3})`,
                    bubbles: 120,
                    colorStart: "#181520",
                    colorStop: "#181520",
                    shadowColor: "#fff7fe",
                    radiusFunc:() => Math.random() * 2.5
                });
            }
            ';
        },
        (new Extend\Locales(__DIR__ . '/locale'))
];
