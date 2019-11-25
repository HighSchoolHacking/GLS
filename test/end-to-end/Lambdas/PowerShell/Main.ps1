function Run-On-Ints($format) {
    for ($i = 0; $i -lt 10; $i += 1) {
        Write-Output format(i);
    }
}

Run-On-Ints lambda i: "Int: $(i)";
