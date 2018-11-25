class Album
    attr_accessor :name
    attr_accessor :year

    def initialize(name, year)
        self.name = name
        self.year = year
    end

    def get_label()
        return "%s: %d" % [self.name, self.year]
    end
end
