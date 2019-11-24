try {
    throw new Error("Oh no!");
} catch (Exception $error) {
    echo "Found an error." . "\n";
} finally {
    # ...
}
