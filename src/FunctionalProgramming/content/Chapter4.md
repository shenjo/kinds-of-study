### curry柯里化

##### 概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

##### 可以一次性的调用curry函数，也可以每次只传一个参数多次调用

```ecmascript 6
// 考虑 add(x,y) 

const add = (x)=> (y)=> x+y;

const addTwo = add(2)
const addTen = add(10)
```


##### 创建curry函数感受下:

```ecmascript 6
import {curry} from 'lodash'

const O_Math = (what,str) => str.match(what)
// O_Math('abc','xxxabcxxx')

const C_isMath = curry(O_Math)
 // let isMatchABC = C_isMath('abc')
 // isMatchABC('xxxxabcxxxx')

const O_map = (f,arr)=> arr.map(f)

const C_map = curry(O_map)

```







