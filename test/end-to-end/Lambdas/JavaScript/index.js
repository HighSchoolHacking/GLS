function runOnInts(format) {
    for (let i = 0; i < 10; i += 1) {
        console.log(format(i));
    }
}

runOnInts((i) => `Int: ${i}`);
