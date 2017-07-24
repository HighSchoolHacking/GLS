import { expect } from "chai";

import { CaseStyleConverter } from "../../../../lib/Conversions/Casing/CaseStyleConverter";

export interface ICaseStyleConverterCreator {
    new(): CaseStyleConverter;
}

const itConvertsFromCaseSensitiveTo = (
    label: string,
    converterType: ICaseStyleConverterCreator,
    words: string[],
    expected: string): void => {
    let descriptor = `converts ${words.length} word`;
    if (words.length > 1) {
        descriptor += "s";
    }

    descriptor += ` ${label}`;

    it(descriptor, () => {
        // Arrange
        const converter = new converterType();
        const original = "abcDefGhi";

        // Act
        const actual = converter.convert(words);

        // Assert
        expect(actual).to.be.equal(expected);
    });
};

export const itConvertsFromTo = (
    converterType: ICaseStyleConverterCreator,
    words: string[],
    expected: string): void => {
    itConvertsFromCaseSensitiveTo("from lower case", converterType, words.map((word) => word.toLowerCase()), expected);
    itConvertsFromCaseSensitiveTo("from upper case", converterType, words.map((word) => word.toUpperCase()), expected);
};
