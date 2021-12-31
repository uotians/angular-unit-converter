import { UnitConverterBase } from "../UnitConverterBase";

export class MeterToMilesConverter extends UnitConverterBase {
    constructor(public override name: string) {
        super(name)
    }

    override convert(strIn: string): string {
        let mi = parseFloat(strIn)
        let m = mi / 1609.344
        return m.toFixed(2)
    }

    override getInputUnit(): string {
        return "meters"
    }

    override getOutputUnit(): string {
        return "miles"
    }
}