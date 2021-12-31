import { UnitConverter } from "../templates";
import { ConverterCategoryBase } from "../ConverterCategoryBase";

import { MilesToMetersConverter } from "./MilesToMetersConverter"
import { MeterToMilesConverter } from "./MeterToMilesConverter"

export class DistanceConverterCategory extends ConverterCategoryBase {
    override converters: UnitConverter[] = []

    constructor(public override name = "Distance converters") {
        super(name)
        this.converters[0] = new MilesToMetersConverter("Miles To Meters")
        this.converters[1] = new MeterToMilesConverter("Meters To Miles")
    }

    override getIcon(): string {
        return 'fa fa-road fa-2x'
    }
}