import { UnitConverterBase } from "../UnitConverterBase";

export class FahrenheitToKelvinConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let fah = parseFloat(strIn)
        let kel = 5 / 9 * (fah + 459.67) 
        return kel.toFixed(2)
    }

    override getInputUnit(): string {
        return "fahrenheit"
    }

    override getOutputUnit(): string {
        return "kelvin"
    }
}