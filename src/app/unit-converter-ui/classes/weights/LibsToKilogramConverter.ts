import { UnitConverterBase } from "../UnitConverterBase";

export class LibsToKilogramConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let libs = parseFloat(strIn)
        let kg = libs * 0.45359237
        return kg.toFixed(2)
    }

    override getInputUnit(): string {
        return "libs"
    }

    override getOutputUnit(): string {
        return "kilograms"
    }
}