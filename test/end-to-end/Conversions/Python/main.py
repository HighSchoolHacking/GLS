#
from converters import try_as_double, try_as_int

if __name__ == "__main__":
    # Strings to numbers
    doubleLike = "3.5"
    doubleNotLike = "a3.5"
    intLike = "7"
    intNotLike = "a"

    try_as_double(doubleLike)
    try_as_double(doubleNotLike)
    try_as_int(intLike, "10")
    try_as_int(intNotLike, "fish")
#
