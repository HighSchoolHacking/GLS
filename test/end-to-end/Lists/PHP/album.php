<?php
class Album
    attr_accessor :name;
    attr_accessor :year;

    function __constructor(name, year)
        self.name = name;
        self.year = year;
    end

    def get_label()
        return '' . self.name . ': ' . self.year . '';
    end
end
