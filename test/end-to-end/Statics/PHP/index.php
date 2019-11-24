class Utilities
    def self.get_longest(words)
        $longest

        for word in words
            if word.length > longest.length
                longest = word;
            end
        end

        Utilities.log(longest);

        return longest;
    end

    def self.log(word)
        echo "Logging: " . word . "\n";
    end
end
