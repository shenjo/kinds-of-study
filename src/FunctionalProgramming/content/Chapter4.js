const {curry} = require('../exercises/util');

/**
 * match
 */
let exampleStr = 'abcdef', exampleRegex = /bc/;
//example
console.log(exampleStr.match(exampleRegex));

const match = curry((what, str) => {
    return str.match(what);
});

console.log(match(exampleRegex, exampleStr));


/**
 * replace
 */

// example

console.log(exampleStr.replace(exampleRegex, 'tt'));

const replace = curry((what, replacement, str) => {
    return str.replace(what, replacement);
});

console.log(replace(exampleRegex, 'tt', exampleStr));

let arr = [1,2,3,4,5,6,7,8,9,10];

/**
 * filter
 */

const filterFn = (number)=>{
    return number > 3;
};

console.log(arr.filter(filterFn))


const filter = curry((f,arr)=>{
    return arr.filter(f);
});

console.log(filter(filterFn,arr));


/**
 * map
 */

const mapFn = (number)=>{
    return number * 2;
};

console.log(arr.map(mapFn))


const map = curry((f,arr)=>{
    return arr.map(f);
});

console.log(map(mapFn,arr));

/**
 * 在上面的代码中遵循的是一种简单，同时也非常重要的模式。
 * 即策略性地把要操作的数据（String， Array）放到最后一个参数里。
 */

const hasSpaces = match(/\s+/g);


console.log(hasSpaces('hello world')); // [' ']

console.log(hasSpaces('spaceless'));  // null

console.log(filter(hasSpaces,['hello world','spaceless']));

const findSpaces = filter(hasSpaces);

console.log(findSpaces(['hello world','spaceless']));
