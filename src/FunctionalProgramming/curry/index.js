 const R = require('ramda')
// 练习 1
//==============
// 通过局部调用（partial apply）移除所有参数

var words = function(str) {
    return R.split(' ', str);
};

console.log(words('a b c d'))

 words = R.split(' ')

 console.log(words('a b c d'))

