require_relative "./point"

class NamedPoint < Point
    attr_accessor :name

    def initialize(x, y, name)
        super(x, y)
        self.name = name
    end

    def get_label()
        return "%s at [%d, %d] with vector %d" % [self.name, self.x, self.y, self.vector]
    end
end
