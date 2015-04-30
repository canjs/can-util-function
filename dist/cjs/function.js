/*can-util-function@0.0.4#function*/
'use strict';
Object.defineProperties(module.exports, {
    default: {
        get: function () {
            return $__default;
        }
    },
    __esModule: { value: true }
});
var $__can__;
var can = ($__can__ = require('can'), $__can__ && $__can__.__esModule && $__can__ || { default: $__can__ }).default;
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
        for (var args = [], $__1 = 2; $__1 < arguments.length; $__1++)
            args[$__1 - 2] = arguments[$__1];
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