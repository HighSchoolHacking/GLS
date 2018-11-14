exports.tryAsDouble = function tryAsDouble(doubleLike) {
    let asDouble = parseFloat(doubleLike);

    if (!isNaN(asDouble)) {
        console.log(`It's a double: ${Math.floor(asDouble)}`);
    }
}

exports.tryAsInt = function tryAsInt(firstIntLike, secondIntLike) {
    let firstInt = parseInt(firstIntLike);
    let secondInt = parseInt(secondIntLike);

    if (!isNaN(firstInt) && !isNaN(secondInt)) {
        console.log(`Both are ints: ${firstInt} ${secondInt}`);
    }
}
