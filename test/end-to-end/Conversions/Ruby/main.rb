require_relative "./converters"

# Strings to numbers
doubleLike = "3.5"
doubleNotLike = "a3.5"
intLike = "7"
intNotLike = "a"

try_as_double(doubleLike)
try_as_double(doubleNotLike)
try_as_int(intLike, "10")
try_as_int(intNotLike, "fish")
