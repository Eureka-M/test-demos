function toString(num) {
    //  这是最简单的写法
    //  return num.toLocaleString();
    const result = [];
    const str = `${num}`.split('').reverse();
    for (let i = 0; i < str.length; i++) {
        if (i && i % 3 === 0) {
            result.push(',');
        }
        result.push(str[i]);
    }
    return result.reverse().join('');
}