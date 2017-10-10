import { expect } from "chai";
import "mocha";

import { PythonImportCaseConverter } from "../../../../lib/Conversions/Casing/PythonImportCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PythonCaseConverter", () => {
    describe("convert", () => {
        // internal directories
        itConvertsFromTo(PythonImportCaseConverter, ["abc"], "abc");
        itConvertsFromTo(PythonImportCaseConverter, ["abc", "def"], "abc.def");
        itConvertsFromTo(PythonImportCaseConverter, ["abc", "def", "ghi"], "abc.def.ghi");

        // parent directories
        itConvertsFromTo(PythonImportCaseConverter, ["..", "ghi"], ".ghi");
        itConvertsFromTo(PythonImportCaseConverter, ["..", "..", "ghi"], "..ghi");
    });
});
