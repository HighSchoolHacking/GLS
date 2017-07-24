import { expect } from "chai";
import "mocha";

import { CaseStyle } from "../../../../lib/Languages/Casing/CaseStyle";
import { CaseStyleConverterBag } from "../../../../lib/Conversions/Casing/CaseStyleConverterBag";
import { FileSystemLowerCaseConverter } from "../../../../lib/Conversions/Casing/FileSystemLowerCaseConverter";

describe("CaseStyleConverterBag", () => {
    describe("getConverter", () => {
        it("retrieves a case style by its enum", () => {
            // Arrange
            const caseStyleConverterBag = new CaseStyleConverterBag();

            // Act
            const command = caseStyleConverterBag.getConverter(CaseStyle.FileSystemLowerCase);

            // Assert
            expect(command).that.be.instanceof(FileSystemLowerCaseConverter);
        });

        it("throws an error for an unknown case style", () => {
            // Arrange
            const caseStyleConverterBag = new CaseStyleConverterBag();

            // Act
            const action = () => caseStyleConverterBag.getConverter(-1);

            // Assert
            expect(action).to.throw();
        });
    });
});
