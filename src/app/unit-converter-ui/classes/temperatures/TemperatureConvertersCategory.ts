import { UnitConverter } from "../templates";
import { ConverterCategoryBase } from "../ConverterCategoryBase";

import { CelsiusToFahrenheitConverter } from "./CelciusToFahrenheitConverter"
import { FahrenheitToCelciusConverter } from "./FahrenheitToCelciusConverter"
import { CelsiusToKelvinConverter } from "./CelciusToKelvinConverter";
import { FahrenheitToKelvinConverter } from "./FahrenheitToKelvinConverter";
import { KelvinToCelciusConverter } from "./KelvinToCelciusConverter";
import { KelvinToFahrenheitConverter } from "./KelvinToFahrenheitConverter";

export class TemperatureConvertersCategory extends ConverterCategoryBase {
    override converters: UnitConverter[] = []

    constructor(public override name = "Temperatures converters") {
        super(name)
        this.converters[0] = new CelsiusToFahrenheitConverter("Celcius To Fahrenheit")
        this.converters[1] = new CelsiusToKelvinConverter("Celcius To Kelvin")
        this.converters[2] = new FahrenheitToCelciusConverter("Fahrenheit To Celcius")
        this.converters[3] = new FahrenheitToKelvinConverter("Fahrenheit To Kelvin")
        this.converters[4] = new KelvinToCelciusConverter("Kelvin To Celcius")
        this.converters[5] = new KelvinToFahrenheitConverter("Kelvin To Fahrenheit")
        
    }

    override getIcon(): string {
        return 'fa fa-thermometer fa-2x'
    }
}