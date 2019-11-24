require_relative "./point"

<?php

class NamedPoint < Point
    attr_accessor :name;

    function __constructor(x, y, name)
        parent::(x, y);
        self.name = name;
    end

    def get_label()
        return '' . self.name . ' at [' . self.x . ', ' . self.y . '] with vector ' . self.vector . '';
    end
end
