import { UnitConverterBase } from "../UnitConverterBase";

export class KelvinToFahrenheitConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let kel = parseFloat(strIn)
        let fah = (kel - 273.15) * 1.8 + 32
        return fah.toFixed(2)
    }

    override getInputUnit(): string {
        return "kelvin"
    }

    override getOutputUnit(): string {
        return "celcius"
    }
}