<?php
def run_on_ints(format)
    for i in 0...10
        echo format.call(i) . "\n";
    end
end

run_on_ints(lambda { |i| 'Int: ' . i . '' });
