import { IParameter } from "./Parameter";
import { RepeatingParameters } from "./RepeatingParameters";
import { SingleParameter } from "./SingleParameter";

/**
 * Summary of parameter restrictions for a command.
 */
export class Restrictions {
    /**
     * Known RepeatingParameters lengths above the minimum.
     */
    private intervals: number[] = [];

    /**
     * The maximum number of allowed parameters.
     */
    private maximum = 0;

    /**
     * The minimum number of allowed parameters.
     */
    private minimum = 0;

    /**
     * Initializes a new instance of the Restrictions class.
     *
     * @param parameters   Descriptions of parameters passed to a command.
     */
    public constructor(parameters: IParameter[]) {
        for (const parameter of parameters) {
            if (parameter instanceof SingleParameter) {
                this.addSingleParameter(parameter);
            } else if (parameter instanceof RepeatingParameters) {
                this.addRepeatingParameters(parameter);
            }
        }
    }

    /**
     *
     * @remarks Having multiple intervals results in none being checked.
     * @todo Implement checking multiple intervals.
     */
    public checkValidity(inputs: string[]): void {
        this.checkBasicRange(inputs);

        if (this.intervals.length === 1) {
            this.checkIntervalRange(inputs);
        }
    }

    /**
     * Marks a repeating parameter's restrictions.
     *
     * @param parameter   A description of a parameter.
     */
    private addRepeatingParameters(parameter: RepeatingParameters): void {
        this.intervals.push(parameter.parameters.length);
        this.maximum = Infinity;
    }

    /**
     * Marks a single parameter's restrictions.
     *
     * @param parameter   A description of a parameter.
     */
    private addSingleParameter(parameter: SingleParameter): void {
        if (parameter.required) {
            this.minimum += 1;
        }

        this.maximum += 1;
    }

    /**
     * Checks that command inputs are within the expected length range.
     *
     * @param inputs   Input parameters passed to a command.
     */
    private checkBasicRange(inputs: string[]): void {
        const inputsLength: number = inputs.length - 1;

        if (inputsLength >= this.minimum && inputsLength <= this.maximum) {
            return;
        }

        let descriptor = `${this.stringifyNumber(this.minimum)}`;

        if (this.maximum !== this.minimum) {
            descriptor += ` to ${this.stringifyNumber(this.maximum)}`;
        }

        descriptor += " parameter";

        if (this.minimum === 1) {
            if (this.maximum !== 1) {
                descriptor += "(s)";
            }
        } else {
            descriptor += "s";
        }

        throw new Error(`'${inputs[0]}' expects ${descriptor} but got ${inputsLength}.`);
    }

    /**
     * Checks that command inputs match an extpected length interval.
     *
     * @param inputs   Input parameters passed to a command.
     */
    private checkIntervalRange(inputs: string[]): void {
        const remaining: number = inputs.length - this.minimum;

        if (remaining % this.intervals.length !== 0) {
            throw new Error(`'${inputs[0]}' expects extra parameters to be a multiple of ${this.intervals[0]}, not ${inputs.length}.`);
        }
    }

    /**
     * @param value   A number value to stringify.
     * @returns A sentence-ready description of the number.
     */
    private stringifyNumber(value: number): string {
        if (value === Infinity) {
            return "infinite";
        }

        return value.toString();
    }
}
