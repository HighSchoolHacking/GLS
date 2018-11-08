import { expect } from "chai";
import "mocha";

import { SnakeCaseConverter } from "../../../../lib/Rendering/Casing/SnakeCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("SnakeCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(SnakeCaseConverter, ["Abc"], "abc");
        itConvertsFromTo(SnakeCaseConverter, ["Abc", "Def"], "abc_def");
        itConvertsFromTo(SnakeCaseConverter, ["Abc", "Def", "Ghi"], "abc_def_ghi");
    });
});
