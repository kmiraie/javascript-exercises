const removeFromArray = function(arr, ...remove) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        if(!remove.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
