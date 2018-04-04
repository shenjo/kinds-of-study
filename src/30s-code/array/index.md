### 1. 分两组按照filters的值

```ecmascript 6
// bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]

const bifurcate = (arr,fitlers)=>arr.reduce((acc,current,index)=>(acc[fitlers[index]?0:1].push(current),acc),[[],[]])

bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

### 2.  分两组按照filter(函数)的值

```ecmascript 6
// bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]

const bifurcateBy = (arr,fn)=>arr.reduce((acc,current)=>(acc[fn(current)?0:1].push(current),acc),[[],[]])

bifurcateBy(['beep', 'boop', 'foo', 'bar'], val=>val[0]==='b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

### 3. 把数组分成明确大小的块

```ecmascript 6
const chunk = (arr,size)=> Array.from({length:Math.ceil(arr.length/size)},(value,index)=> arr.slice(index*size,(index+1)*size))
    
chunk([1,2,3,4,5],2) // [[1,2],[3,4],[5]]

```

### 4. 从数组里剔除false的值

```ecmascript 6
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]

```

### 5 将数组里的元素按给定的函数分组，并给出每一组里元素的数量

```ecmascript 6
const countBy = (arr,fn)=> arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc,current)=>(acc[current]?acc[current]++:acc[current]=1,acc),{})

countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}

```

### 6. 统计一个元素在数组里出现的次数

```ecmascript 6
const countOccurrences = (arr,ele) => arr.reduce((count,current)=> current===ele?++count:count,0) 

countOccurrences([1, 1, 2, 1, 2, 3], 2); // 3
```

### 7. 深度打平一个数组

```ecmascript 6

const deepFlatten = arr => [].concat(...arr.map(item=>Array.isArray(item)? deepFlatten(item):item))

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
