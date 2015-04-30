import can from 'can';
import 'can/util/util';

can.extend(can, {
    debounce: function(fn, ms, context) {
        var timeout;
        return function() {
            var args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(can.proxy(function() {
                fn.apply(this, args);
            }, context || this), ms);
        };
    },
    defer: function(fn, context, ...args) {
        var ctx = context || this;
        setTimeout(function() {
            fn.apply(ctx, args);
        }, 0);
    },
    throttle: function(fn, ms, context) {
        var run;
        return function() {
            var args = arguments;
            var ctx = context || this;
            if (!run) {
                run = true;
                setTimeout(function() {
                    fn.apply(ctx, args);
                    run = false;
                }, ms);
            }
        };
    }
});

export default can;
