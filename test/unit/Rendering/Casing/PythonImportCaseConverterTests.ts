import "mocha";

import { PythonImportCaseConverter } from "../../../../lib/Rendering/Casing/PythonImportCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PythonImportCaseConverter", () => {
    describe("convert", () => {
        // Internal directories
        itConvertsFromTo(PythonImportCaseConverter, ["Abc"], "abc");
        itConvertsFromTo(PythonImportCaseConverter, ["Abc", "Def"], "abc.def");
        itConvertsFromTo(PythonImportCaseConverter, ["Abc", "Def", "Ghi"], "abc.def.ghi");

        // Parent directories
        itConvertsFromTo(PythonImportCaseConverter, ["..", "ghi"], ".ghi");
        itConvertsFromTo(PythonImportCaseConverter, ["..", "..", "ghi"], "..ghi");
    });
});
