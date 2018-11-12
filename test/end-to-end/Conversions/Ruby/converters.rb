#
def try_as_double(doubleLike)
    asDouble = Float(doubleLike) rescue nil

    if (asDouble != nil)
        puts "It's a double: %d" % [asDouble.floor]
    end
end

def try_as_int(firstIntLike, secondIntLike)
    firstInt = Float(firstIntLike) rescue nil
    secondInt = Float(secondIntLike) rescue nil

    if (firstInt != nil && secondInt != nil)
        puts "Both are ints: %d %d" % [firstInt, secondInt]
    end
end
#
