import { UnitConverterBase } from "../UnitConverterBase";

export class KelvinToCelciusConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let kel = parseFloat(strIn)
        let cel = kel - 273.15 
        return cel.toFixed(2)
    }

    override getInputUnit(): string {
        return "kelvin"
    }

    override getOutputUnit(): string {
        return "celcius"
    }
}