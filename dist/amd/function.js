/*can-util-function@0.0.4#function*/
define(['can'], function ($__0) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    var can = $__0.default;
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
            for (var args = [], $__2 = 2; $__2 < arguments.length; $__2++)
                args[$__2 - 2] = arguments[$__2];
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