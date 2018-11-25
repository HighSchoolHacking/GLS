def run_on_ints(format)
    for i in 0...10
        puts format.call(i)
    end
end

run_on_ints(lambda { |i| "Int: %d" % [i] })
