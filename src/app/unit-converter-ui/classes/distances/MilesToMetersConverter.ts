import { UnitConverterBase } from "../UnitConverterBase";

export class MilesToMetersConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let m = parseFloat(strIn)
        let mi = m * 1609.344
        return mi.toFixed(2)
    }

    override getInputUnit(): string {
        return "miles"
    }

    override getOutputUnit(): string {
        return "meters"
    }
}