import QUnit from 'steal-qunit';
import can from 'can';
import 'can-util-function';

QUnit.module('can.debounce');

QUnit.test("can.debounce uses the correct context (https://github.com/bitovi/canjs/issues/782)", function(assert) {
    var done = assert.async();
    var ctx1 = {name: 'David'};
    var ctx2 = {name: 'Justin'};

    var debouncer = can.debounce(function(callback) {
        callback(this);
    }, 0);

    debouncer.call(ctx1, function(ctx) {
        assert.equal(ctx.name, 'David', 'Got correct context');
        debouncer.call(ctx2, function(ctx) {
            assert.equal(ctx.name, 'Justin', 'Got correct context');
            done();
        });
    });
});

QUnit.module('can.throttle');

QUnit.test("can.throttle uses the correct context", function(assert) {
    var done = assert.async();
    var ctx1 = {name: 'David'};
    var ctx2 = {name: 'Justin'};

    var throttler = can.throttle(function(callback) {
        callback(this);
    }, 0);

    throttler.call(ctx1, function(ctx) {
        assert.equal(ctx.name, 'David', 'Got correct context');
        setTimeout(function() {
            throttler.call(ctx2, function(ctx) {
                assert.equal(ctx.name, 'Justin', 'Got correct context');
                done();
            });
        }, 20);
    });
});

QUnit.module('can.defer');

QUnit.test("can.defer delays the execution of `fn` until the stack is cleared", function(assert) {
    var done = assert.async();
    var afterCalled = false;

    function myFunc(arg) {
        assert.ok(afterCalled);
        done();
    }

    can.defer(myFunc);

    afterCalled = true;

});

QUnit.test("can.defer lets `fn` be called with the context passed", function(assert) {
    var done = assert.async();
    var ctx = {};

    function myFunc(arg) {
        assert.strictEqual(ctx, this);
        done();
    }

    can.defer(myFunc, ctx);

});

QUnit.test("can.defer passed extra arguments to the defered function", function(assert) {
    var done = assert.async();

    var value1 = "I am the value #1";
    var value2 = "I am the value #2";

    function myFunc(arg1, arg2) {
        assert.strictEqual(value1, arg1);
        assert.strictEqual(value2, arg2);
        done();
    }

    can.defer(myFunc, null, value1, value2);

});
