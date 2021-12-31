import { UnitConverter } from "../templates";
import { ConverterCategoryBase } from "../ConverterCategoryBase";

import { KilogramToLibsConverter } from "./KilogramToLibsConverter"
import { LibsToKilogramConverter } from "./LibsToKilogramConverter"

export class WeightConverterCategory extends ConverterCategoryBase {
    override converters: UnitConverter[] = []

    constructor(public override name = "Weigths converters") {
        super(name)
        this.converters[0] = new KilogramToLibsConverter("Kilogram To Libs")
        this.converters[1] = new LibsToKilogramConverter("Libs To Kilogram")
    }

    override getIcon(): string {
        return 'fa fa-balance-scale fa-2x'
    }
}