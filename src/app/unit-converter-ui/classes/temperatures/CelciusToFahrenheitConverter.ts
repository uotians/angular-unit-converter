import { UnitConverterBase } from "../UnitConverterBase";

export class CelsiusToFahrenheitConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let ce = parseFloat(strIn)
        let fah = (ce * 1.8) + 32 
        return fah.toFixed(2)
    }

    override getInputUnit(): string {
        return "celcius"
    }

    override getOutputUnit(): string {
        return "fahrenheit"
    }
}