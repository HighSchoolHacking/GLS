function runOnInts(format: (i: number) => string): void {
    for (let i: number = 0; i < 10; i += 1) {
        console.log(format(i));
    }
}

runOnInts((i) => `Int: ${i}`);
