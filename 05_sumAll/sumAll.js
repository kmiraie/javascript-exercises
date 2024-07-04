const sumAll = function(...num) {
    if(num.some(n => typeof n !== 'number')) return 'ERROR'
    let numbers = [];
    let start = Math.min(num[0], num[1]);
    let end = Math.max(num[0], num[1]);
    for(let i = start; i <= end; i++) {
        if(i < 0){
            return 'ERROR'
        }else{
            numbers.push(i)
        }
    }
    return numbers.reduce((a,c) => a+c, 0);
};

// Do not edit below this line
module.exports = sumAll;
