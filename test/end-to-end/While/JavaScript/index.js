while (true) {
    console.log("Near-infinite");
    break;
}

let count = 0;

while (count < 5) {
    count += 1;

    if (count % 2 === 0) {
        continue;
    }

    console.log(`count is ${count}`);
}

