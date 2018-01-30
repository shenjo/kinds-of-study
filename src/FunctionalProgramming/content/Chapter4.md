### curry柯里化

##### 概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

##### 可以一次性的调用curry函数，也可以每次只传一个参数多次调用

```ecmascript 6
// 考虑 add(x,y) 

const add = (x)=> (y)=> x+y;

const addTwo = add(2)
const addTen = add(10)
```


##### 创建curry函数感受下: [example](./Chapter4.js)

```ecmascript 6

const match = curry((what, str) => {
    return str.match(what);
});

const replace = curry((what, replacement, str) => {
    return str.replace(what, replacement);
});

const filter = curry((f,arr)=>{
    return arr.filter(f);
});

const map = curry((f,arr)=>{
    return arr.map(f);
});

```

##### 考虑需求，得要html 某个element的所有子节点

```ecmascript 6
const getChildren = (x) =>{
  return x.childNodes;
};

const allTheChildren = map(getChildren);

allTheChildren([ele1,ele2,ele3])

const _allTheChildren = (elements)=> {
  return _.map(elements, getChildren);
};

```









