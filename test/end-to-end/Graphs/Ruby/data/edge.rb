class Edge
    attr_accessor :distance
    attr_accessor :from
    attr_accessor :to

    def initialize(distance, from, to)
        self.distance = distance
        self.from = from
        self.to = to
    end
end

