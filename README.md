# can-util-function

[![Greenkeeper badge](https://badges.greenkeeper.io/canjs/can-util-function.svg)](https://greenkeeper.io/)

_\*This plugin is experimental and not **official** or **supported**\*_

The can-util-function plugin adds some common functions onto the `can` framework object (sometimes called the can namespace);

## API

[can.debounce](#candebouncefn-ms-context)  
[can.defer](#candeferfn-context-args)  
[can.throttle](#canthrottlefn-ms-context)  

### can.debounce(fn, ms, [context])

Creates a function that will delay calling `fn` by a number of milliseconds `ms` since the last time `fn` was called.

```javascript
{
    ".button click": can.debounce(function(el, ev){
        submitChanges(el);
    }, 200)
}
```

##### fn
Type: `Function`
A function to be delayed

##### ms
Type: `Number`
The number of milliseconds to delay before calling `fn` again

##### context [optional]
Type: `Object`
The context (this) that `fn` will be called with


### can.defer(fn, [context, ...args])

Delays calling `fn` until the current stack has cleared *(like `setTimeout(fn, 0)`)*

```javascript
can.defer(function(text) {
  console.log(text);
}, this, 'deferred');
```

##### fn
Type: `Function`
A function to be delayed

##### context [optional]
Type: `Object`
The context (this) that `fn` will be called with

##### ...args [optional]
Type: `any arguments`
All extra arguments are passed into `fn` in order


### can.throttle(fn, ms, [context])
Creates a function that only gets invoked a max of *once* per the time passed in `ms`.

```javascript
{
    "{window} scroll": can.throttle(function(el, ev){
        updatePosition(el);
    }, 200)
}
```

##### fn
Type: `Function`
A function to be throttled

##### ms
Type: `Number`
The number of milliseconds to wait before allowing `fn` to be called again

##### context [optional]
Type: `Object`
The context (this) that `fn` will be called with

-------------------


Licensing
---------

  MIT - Please see the file called LICENSE.
