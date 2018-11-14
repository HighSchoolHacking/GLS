while true
    puts "Near-infinite"
    break
end

count = 0

while count < 5
    count += 1

    if count % 2 == 0
        next
    end

    puts "count is %d" % [count]
end

