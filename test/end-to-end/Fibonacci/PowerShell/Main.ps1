. "./Generation/CachingGenerator.ps1"
. "./Generation/NonCachingGenerator.ps1"

function Get-Label($index) {
    if ($index -eq 1) {
        return "st";
    } elseif ($index -eq 2) {
        return "nd";
    } elseif ($index -eq 3) {
        return "rd";
    }

    return "th";
}

function Use-Generator($generator) {
    for ($i = 0; $i -lt 10; $i += 1) {
        $label = Get-Label $i;
        Write-Output "The $($i)$($label) Fibonacci number is $($generator.generate($i))";
    }
}

function Check-Cache($generator, $index) {
    if ($generator.isCached($index)) {
        Write-Output "$($index) is cached.";
    } else {
        Write-Output "$($index) is not cached.";
    }
}

$cached = [CachingGenerator]::new();
$uncached = [NonCachingGenerator]::new();

Use-Generator $cached;
Use-Generator $uncached;

Check-Cache $cached 7;
Check-Cache $cached 14;
