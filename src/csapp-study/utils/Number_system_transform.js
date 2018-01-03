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

function decimalism_to_binary(num,bit=32){
    let result = '';
    while(num){
        result = `${num%2}${result}`;
        num = Math.floor(num/2);
    }
    return result;
}

module.exports = {binary_to_decimalism,decimalism_to_binary};