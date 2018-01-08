const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function MyPromise(fn) {
    let state = PENDING, handlers = [], value;

    function fulfill(result) {
        state = FULFILLED;
        value = result;
        handlers.forEach(handle);
        handlers = null;
    }

    function reject(error) {
        state = REJECTED;
        value = error
        handlers.forEach(handle);
        handlers = null;
    }

    function resolve(result) {
        try {
            let then = getThen(result)
            if (then) {
                doResolve(then.bind(result), resolve, reject);
                return;
            }
            fulfill(result);
        } catch (e) {
            reject(e)
        }
    }

//检查value是否是promise，是就返回then
    function getThen(value) {
        let type = typeof value;
        if (value && (type === 'object' || type === 'function')) {
            let then = value.then;
            if (typeof then === 'function') {
                return then;
            }
        }
        return null;
    }

    function doResolve(fn, onFulfilled, onRejected) {
        let done = false;
        try {
            fn((value) => {
                if (done) {
                    return;
                }
                done = true;
                onFulfilled(value)
            }, (reson) => {
                if (done) {
                    return;
                }
                done = true;
                onRejected(reson)
            })
        } catch (e) {
            if (done) {
                return;
            }
            done = true;
            onRejected(e)
        }
    }

    function handle(handler) {
        if (state === PENDING) {
            handlers.push(handler);
        } else {
            if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
                handler.onFulfilled(value);
            }
            if (state === REJECTED && typeof handler.onRejected === 'function') {
                handler.onRejected(value);
            }
        }
    }

    this.done = (onFulfilled, onRejcted) => {
        setTimeout(() => {
            handle({onFulfilled, onRejcted})
        }, 0)
    };

    this.then = (onFulfilled, onRejected)=>{
        let _self = this;
        return new MyPromise(function (resolve,reject) {
            return _self.done(function (result) {
                if(typeof onFulfilled==='function') {
                    try {
                        return resolve(onFulfilled(result));
                    } catch (e) {
                        return reject(e);
                    }
                }else{
                    return resolve(result);
                }
            },function (error) {
                if (typeof onRejected === 'function') {
                    try {
                        return resolve(onRejected(error));
                    } catch (ex) {
                        return reject(ex);
                    }
                } else {
                    return reject(error);
                }
            })
        })
    }

    doResolve(fn, resolve, reject);
}

let p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log('haha');
        resolve(100);
    }, 1000)
});
p.then((result)=>{
    console.log(`the result is ${result}`)
})


// const {to} = require('./')
// console.log(to)
// async function test(){
//     let data = await to(someThing());
//     console.log(data);
//
// }
//
// function someThing(){
//     return new Promise((a,b)=>{
//         setTimeout(()=>{b(new Error('something wrong'))},1000)
//     })
// }
//
// test();