import { UnitConverterBase } from "../UnitConverterBase";

export class KilogramToLibsConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let kg = parseFloat(strIn)
        let libs = kg / 0.45359237
        return libs.toFixed(2)
    }

    override getInputUnit(): string {
        return "kilograms"
    }

    override getOutputUnit(): string {
        return "libs"
    }
}