import { Parameter } from "./Parameter";
import { SingleParameter } from "./SingleParameter";
import { RepeatingParameters } from "./RepeatingParameters";

/**
 * Summary of parameter restrictions for a command.
 */
export class Restrictions {
    /**
     * The minimum number of allowed parameters.
     */
    private minimum: number = 0;

    /**
     * The maximum number of allowed parameters.
     */
    private maximum: number = 0;

    /**
     * Known RepeatingParameters lengths above the minimum.
     */
    private intervals: number[] = [];

    /**
     * Initializes a new instance of the Restrictions class.
     * 
     * @param parameters   Descriptions of parameters passed to a command.
     */
    constructor(parameters: Parameter[]) {
        for (let i: number = 0; i < parameters.length; i += 1) {
            let parameter: Parameter = parameters[i];

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
     * Checks that command inputs are within the expected length range.
     * 
     * @param inputs   Input parameters passed to a command.
     */
    private checkBasicRange(inputs: string[]): void {
        let inputsLength: number = inputs.length - 1;

        if (inputsLength >= this.minimum && inputsLength <= this.maximum) {
            return;
        }

        let descriptor: string = `${this.stringifyNumber(this.minimum)}`;

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
        let remaining: number = inputs.length - this.minimum;

        if (remaining % this.intervals.length !== 0) {
            throw new Error(`'${inputs[0]}' expects extra parameters to be a multiple of ${this.intervals[0]}, not ${inputs.length}.`);
        }
    }
    
    /**
     * @param number   A number of parameters.
     * @returns A sentence-ready description of the number.
     */
    private stringifyNumber(number: number): string {
        if (number === Infinity) {
            return "infinite";
        }

        return number.toString();
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
     * Marks a repeating parameter's restrictions.
     * 
     * @param parameter   A description of a parameter.
     */
    private addRepeatingParameters(parameter: RepeatingParameters): void {
        this.intervals.push(parameter.parameters.length);
        this.maximum = Infinity;
    }
}
