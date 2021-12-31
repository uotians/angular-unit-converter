import { UnitConverterBase } from "../UnitConverterBase";

export class CelsiusToKelvinConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let ce = parseFloat(strIn)
        let kel = ce + 273.15 
        return kel.toFixed(2)
    }

    override getInputUnit(): string {
        return "celcius"
    }

    override getOutputUnit(): string {
        return "kelvin"
    }
}