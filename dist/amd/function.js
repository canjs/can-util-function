/*can-util-function@0.0.1#function*/
define([
    'can',
    'can/util'
], function ($__0, $__2) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    var can = $__0.default;
    $__2;
    can.extend(can, {
        debounce: function (fn, ms, context) {
            var timeout;
            return function () {
                var args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(can.proxy(function () {
                    fn.apply(this, args);
                }, context || this), ms);
            };
        },
        defer: function (fn, context) {
            for (var args = [], $__3 = 2; $__3 < arguments.length; $__3++)
                args[$__3 - 2] = arguments[$__3];
            var ctx = context || this;
            setTimeout(function () {
                fn.apply(ctx, args);
            }, 0);
        },
        throttle: function (fn, ms, context) {
            var run;
            return function () {
                var args = arguments;
                var ctx = context || this;
                if (!run) {
                    run = true;
                    setTimeout(function () {
                        fn.apply(ctx, args);
                        run = false;
                    }, ms);
                }
            };
        }
    });
    var $__default = can;
    return {
        get default() {
            return $__default;
        },
        __esModule: true
    };
});