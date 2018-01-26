function binary_to_decimalism(binary) {
    binary = "" + binary;
    let baseMutil = 1, result = 0;
    [...binary].reverse().forEach(bit => {
        if(' ' !== bit){
            result += parseInt(bit) * baseMutil;
            baseMutil *= 2;
        }
    });
    return result;
}
/**经过学习<<javascript高级程序设计>> 发现有内置的方法
function decimalism_to_binary(num,bit=32){
    let result = '';
    while(num){
        result = `${num%2}${result}`;
        num = Math.floor(num/2);
    }
    return result;
}
 */
const decimalism_to_binary = num => num.toString(2);


module.exports = {binary_to_decimalism,decimalism_to_binary};