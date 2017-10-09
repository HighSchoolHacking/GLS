import { expect } from "chai";
import "mocha";

import { PythonCaseConverter } from "../../../../lib/Conversions/Casing/PythonCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PythonCaseConverter", () => {
    describe("convert", () => {
        // internal directories
        itConvertsFromTo(PythonCaseConverter, ["abc"], ".abc");
        itConvertsFromTo(PythonCaseConverter, ["abc", "def"], ".abc.def");
        itConvertsFromTo(PythonCaseConverter, ["abc", "def", "ghi"], ".abc.def.ghi");

        // parent directories
        itConvertsFromTo(PythonCaseConverter, ["..", "ghi"], "..ghi");
        itConvertsFromTo(PythonCaseConverter, ["..", "..", "ghi"], "...ghi");
    });
});
