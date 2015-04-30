/*[global-shim-start]*/
(function (exports, global){
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses only the exports objet
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	global.System = {
		define: function(__name, __code){
			global.define = origDefine;
			eval("(function() { " + __code + " \n }).call(global);");
			global.define = ourDefine;
		},
		orig: global.System
	};
})({},window)
/*can-util-function@0.0.4#function*/
define('can-util-function', ['can'], function ($__0) {
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
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
	window.System = window.System.orig;
})();