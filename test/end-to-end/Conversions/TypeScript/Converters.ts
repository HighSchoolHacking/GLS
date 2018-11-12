//
export function tryAsDouble(doubleLike: string): void {
    let asDouble: number = parseFloat(doubleLike);

    if (!isNaN(asDouble)) {
        console.log(`It's a double: ${Math.floor(asDouble)}`);
    }
}

export function tryAsInt(firstIntLike: string, secondIntLike: string): void {
    let firstInt: number = parseInt(firstIntLike);
    let secondInt: number = parseInt(secondIntLike);

    if (!isNaN(firstInt) && !isNaN(secondInt)) {
        console.log(`Both are ints: ${firstInt} ${secondInt}`);
    }
}
//
