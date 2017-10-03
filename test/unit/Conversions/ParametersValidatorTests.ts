import { expect } from "chai";
import "mocha";

import { KeywordParameter } from "../../../lib/Commands/Metadata/Parameters/KeywordParameter";
import { IParameter } from "../../../lib/Commands/Metadata/Parameters/Parameter";
import { RepeatingParameters } from "../../../lib/Commands/Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "../../../lib/Commands/Metadata/Parameters/SingleParameter";
import { ParametersValidator } from "../../../lib/Conversions/ParametersValidator";

interface IValidation {
    expectation: string;
    failure?: string;
    inputs: string[];
    requirements: IParameter[];
}

describe("ParametersValidator", () => {
    describe("validate", () => {
        const validations: IValidation[] = [
            {
                expectation: "rejects a missing required single parameter",
                failure: "Missing parameter: 'first'",
                inputs: ["command"],
                requirements: [
                    new SingleParameter("first", "", true)
                ]
            },
            {
                expectation: "accepts an available required single parameter",
                inputs: ["command", "abc"],
                requirements: [
                    new SingleParameter("first", "", true)
                ]
            },
            {
                expectation: "rejects a missing required second parameter",
                failure: "Missing parameter: 'second'",
                inputs: ["command", "abc"],
                requirements: [
                    new SingleParameter("first", "", true),
                    new SingleParameter("second", "", true)
                ]
            },
            {
                expectation: "accepts an available required second parameter",
                inputs: ["command", "abc", "def"],
                requirements: [
                    new SingleParameter("first", "", true),
                    new SingleParameter("first", "", true)
                ]
            },
            {
                expectation: "accepts zero matched repeating parameters",
                inputs: ["command"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true)
                        ])
                ]
            },
            {
                expectation: "accepts one matched repeating parameter",
                inputs: ["command", "abc"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true)
                        ])
                ]
            },
            {
                expectation: "accepts two matched repeating parameters",
                inputs: ["command", "abc", "def"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true)
                        ])
                ]
            },
            {
                expectation: "rejects one repeating parameter when two are required",
                failure: "Expected a multiple of 2 repeating parameters but got 1.",
                inputs: ["command", "abc"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true),
                            new SingleParameter("second", "", true),
                        ])
                ]
            },
            {
                expectation: "accepts repeating parameters without a subsequent keyword",
                inputs: ["command", "abc", "def"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true),
                            new SingleParameter("second", "", true),
                        ]),
                    new KeywordParameter(["literal"], "")
                ]
            },
            {
                expectation: "accepts repeating parameters with a subsequent keyword",
                inputs: ["command", "abc", "def", "literal"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true),
                            new SingleParameter("second", "", true),
                        ]),
                    new KeywordParameter(["literal"], "")
                ]
            },
            {
                expectation: "accepts repeating parameters with a subsequent keyword and repeating parameters",
                inputs: ["command", "abc", "def", "literal", "fhi"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true),
                            new SingleParameter("second", "", true),
                        ]),
                    new KeywordParameter(["literal"], ""),
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("third", "", true)
                        ])
                ]
            },
            {
                expectation: "rejects repeating parameters of the wrong count with a subsequent keyword and repeating parameters",
                failure: "Expected a multiple of 2 repeating parameters but got 1.",
                inputs: ["command", "abc", "literal", "def"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true),
                            new SingleParameter("second", "", true),
                        ]),
                    new KeywordParameter(["literal"], ""),
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("third", "", true)
                        ])
                ]
            },
            {
                expectation: "rejects repeating parameters with a subsequent keyword and repeating parameters of the wrong count",
                failure: "Expected a multiple of 2 repeating parameters but got 1.",
                inputs: ["command", "abc", "literal", "def"],
                requirements: [
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("first", "", true),
                        ]),
                    new KeywordParameter(["literal"], ""),
                    new RepeatingParameters(
                        "",
                        [
                            new SingleParameter("second", "", true),
                            new SingleParameter("third", "", true)
                        ])
                ]
            }
        ];

        for (const validation of validations) {
            const { failure, inputs, requirements } = validation;

            it(validation.expectation, () => {
                // Arrange
                const validator = new ParametersValidator();

                // Act
                const action = () => {
                    validator.validate(inputs, requirements);
                };

                // Act
                if (failure !== undefined) {
                    expect(action).to.throw(failure);
                } else {
                    expect(action).to.not.throw();
                }
            });
        }
    });
});
