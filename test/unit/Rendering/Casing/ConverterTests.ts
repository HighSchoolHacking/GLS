import { expect } from "chai";

import { ICaseStyleConverter } from "../../../../lib/Rendering/Casing/CaseStyleConverter";

interface ICaseStyleConverterCreator {
    new(): ICaseStyleConverter;
}

const itConvertsFromCaseSensitiveTo = (
    label: string,
    transformerType: ICaseStyleConverterCreator,
    words: string[],
    expected: string,
): void => {
    let descriptor = `converts ${words.length} word`;
    if (words.length > 1) {
        descriptor += "s";
    }

    descriptor += ` ${label}`;

    it(descriptor, () => {
        // Arrange
        const converter = new transformerType();
        const original = "abcDefGhi";

        // Act
        const actual = converter.convert(words);

        // Assert
        expect(actual).to.be.equal(expected);
    });
};

export const itConvertsFromTo = (
    transformerType: ICaseStyleConverterCreator,
    words: string[],
    expected: string,
): void => {
    itConvertsFromCaseSensitiveTo("from lower case", transformerType, words.map((word) => word.toLowerCase()), expected);
    itConvertsFromCaseSensitiveTo("from upper case", transformerType, words.map((word) => word.toUpperCase()), expected);
};
