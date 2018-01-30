### Hindley-Milner 类型签名

考虑一个列子，对一个数组中（全是Number)不小于10的数扩大两倍


```ecmascript 6
/**
 * @return {boolean}
 */
function NotLessThenTen(number){
    return number > 10;
}

function doubleNumber(number) {
  return number * 2
}

function getResult(arr){
    let result = [];
    arr.forEach(item=>{
        if(NotLessThenTen(item)){
            result.push(doubleNumber(item));
        }
    })
    return result;
}

compose(map(doubleNumber),filter(NotLessThenTen))




```