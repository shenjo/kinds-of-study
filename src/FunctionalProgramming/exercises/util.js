const curry = (fn) => {
    const arity = fn.length;
    let curriedFn = (...args) => {
        if (args.length >= arity) {
            return fn.apply(null, args);
        } else {
            return (...anotherArgs) => {
                return curriedFn.apply(null, args.concat(anotherArgs))
            };
        }
    };
    return curriedFn;
};

const compose = (...fns) => {
    const _length = fns.length;
    return (...args) => {
        let next_args = null;
        for (let i = _length; --i >= 0;) {
            const fn = fns[i];
            let fnArg = next_args ? next_args : args
            let currentArgs = fn.length ? fnArg.slice(0, fn.length) : fnArg;
            next_args = args.slice(fn.length || 1);
            let result = fn.call(null, ...currentArgs);
            next_args.unshift(result);
        }
        return next_args[0];
    }
};

const map = curry((f, arr) => {
    return arr.map(f);
});

const filter = curry((f, arr) => {
    return arr.filter(f);
});


const split = curry((what, str) => {
    return str.split(what);
});

const match = curry((what, str) => {
    return str.match(what);
});

const reduce = curry((f, arr) => {
    return arr.reduce(f);
});

const trace = curry((tag, x) => {
    console.log(tag, x);
    return x
});

const join = curry((what, arr) => {
    return arr.join(what);
});

const replace = curry((what,replacement,str)=>{
    return str.replace(what,replacement);
})


module.exports = {
    compose,
    curry,
    split,
    map,
    filter,
    match,
    reduce,
    trace,
    join,
    replace
};
