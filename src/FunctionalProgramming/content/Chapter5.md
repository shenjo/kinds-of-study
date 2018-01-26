### 组合

```ecmascript 6
// 顺序重要的的例子
const compose = (f,g)=> (x)=> f(g(x))

const toUpperCase = (str)=> str.toUpperCase();

const exclaim = (str) => `${str}!`

const shout = compose(toUpperCase,exclaim);

shout('hello,wolrd')
//可读性大大提升

// function shout2(x){
//      return exclaim(toUpperCase(x));
// }


const first = (arr) => arr[0]

const reverse = (arr) => arr.reverse()

const last = compose(first,reverse);

last(['abc','def','ghi','jkl'])

const lastUpper = compose(toUpperCase,compose(first,reverse))

lastUpper(['abc','def','ghi','jkl'])
// const lastUpper = compose(compose(toUpperCase,first) ,reverse)

```


```ecmascript 6
// /可变的组合（variadic compose）

const compose = (...fns) => {
    const _length = fns.length;
    return (...args) => {
        let next_args = null;
        for(let i =_length;--i>=0;){
            const fn = fns[i];
            let fnArg = next_args ? next_args : args
            let currentArgs = fn.length ? fnArg.slice(0, fn.length) : fnArg;
            next_args = args.slice(fn.length || 1);
            let result = fn.call(null,...currentArgs);
            next_args.unshift(result);
        }
        return next_args[0];
    }
};

const toUpperCase = (str) => str.toUpperCase();

const first = (arr) => arr[0]

const reverse = (arr) => arr.reduce((result,current)=> [current].concat(result))

const lastUpper = compose(toUpperCase, first, reverse)


const data = ['abc', 'def', 'ghi', 'jkl']
console.log('========lastUpper executing==========')
let result1 = lastUpper(data)
console.log(`========lastUpper result: ${result1} ==========`)

let a = compose(toUpperCase, first)

let b = compose(first,reverse);

let lastUpper1 = compose(toUpperCase,b);

let lastUpper2 = compose(a,reverse);

console.log('========lastUpper1 executing==========')
lastUpper1(data);
let result2 = lastUpper(data)
console.log(`========lastUpper result: ${result2} ==========`)

console.log('========lastUpper2 executing==========')
lastUpper2(data);
let result3 = lastUpper(data)
console.log(`========lastUpper result: ${result3} ==========`)

```

考虑如果不采用FP写法，实现大致是

```ecmascript 6

function lastUpper3(data){
  return toUpperCase(first(reverse(data)))
}


```

如果还有个toLowerCase的方法

```ecmascript 6
const toLowerCase = (str) => str.toLowerCase();

// fp
const lastLower = compose(toLowerCase,first,reverse)

// not fp 

function lastLower1(data){
  return toLowerCase(first(reverse(data)))
}

```

#### pointfree

> pointfree 模式指的是，永远不必说出你的数据

```ecmascript 6

// 非 pointfree，因为提到了数据：word
const snakeCase = function (word) {
  return word.toLowerCase().replace(/\s+/ig, '_');
};

// pointfree
const snakeCase1 = compose(replace(/\s+/ig, '_'), toLowerCase);

```

##### 利用 curry，可以让每个函数接收数据-操作数据--传递数据

##### 在非pointfree中，有数据才能操作一切


#### debug

参见[原文debug章节](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch5.html#debug)