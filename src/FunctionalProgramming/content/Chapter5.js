const {compose, reduce, trace ,split ,replace,join,map} = require('../exercises/util');

const toUpperCase = x => x.toUpperCase();

const exclaim = x => `${x}!`;

const shout = compose(exclaim, toUpperCase);


console.log(shout('hello world'));

// 如果不适用组合
/*
const shout = function(x){
  return exclaim(toUpperCase(x));
};
*/
let exampleData = ['a', 'b', 'c', 'd', 'e'];

const head = x => x[0];

const reverse = reduce((acc, x) => {
    return [x].concat(acc)
});

const last = compose(head, reverse);

console.log(last(exampleData));

//结合律

const lastUpper = compose(toUpperCase, head, reverse);

console.log(lastUpper(exampleData));

const lastUpper1 = compose(compose(toUpperCase, head), reverse);

console.log(lastUpper1(exampleData));

const lastUpper2 = compose(toUpperCase, compose(head, reverse));

console.log(lastUpper2(exampleData));

/*
const lastUpper2 = function(x){
  return toUpperCase(head(reverse(x));
};
*/

const exclaimLastUpper = compose(exclaim, toUpperCase, head, reverse);


const exclaimLastUpper2 = compose(shout, head, reverse);

console.log(exclaimLastUpper(exampleData));

console.log(exclaimLastUpper2(exampleData));


// debug


const dasherize = compose(join('-'), map(toUpperCase) , split(' '), replace(/\s{2,}/ig,' '));

console.log(dasherize('My name is Joey'));

// const dasherize = compose(join('-'), toUpperCase , split(' '), replace(/\s{2,}/ig,' '));
