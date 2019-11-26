function Run-On-Ints($format) {
    for ($i = 0; $i -lt 10; $i += 1) {
        Write-Output $format.Invoke($i);
    }
}

Run-On-Ints { param ($i) "Int: $($i)" };
