import { UnitConverterBase } from "../UnitConverterBase";

export class FahrenheitToCelciusConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let fah = parseFloat(strIn)
        let ce = (fah - 32) * 0.556
        return ce.toFixed(2)
    }

    override getInputUnit(): string {
        return "fahrenheit"
    }

    override getOutputUnit(): string {
        return "celcius"
    }
}