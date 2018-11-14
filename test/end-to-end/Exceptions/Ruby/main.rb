begin
    raise Exception.new("Oh no!")
rescue Exception => error
    puts "Found an error."
ensure
    # ...
end
