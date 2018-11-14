using System;

try
{
    throw new Exception("Oh no!");
}
catch (Exception error)
{
    Console.WriteLine("Found an error.");
}
finally
{
    // ...
}
