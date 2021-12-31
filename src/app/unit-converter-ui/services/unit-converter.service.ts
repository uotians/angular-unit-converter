import { Injectable } from "@angular/core";

import { ConverterCategory, UnitConverter } from '../classes/templates'

import { TemperatureConvertersCategory } from '../classes/temperatures/TemperatureConvertersCategory'
import { DistanceConverterCategory } from '../classes/distances/DistanceConvertersCategory'
import { WeightConverterCategory } from '../classes/weights/WeightConvertersCategory'

@Injectable({
    providedIn: 'root',
})
export class UnitConverterService {
    categories: ConverterCategory[] = []

    constructor() {
        const temperatureConverterCategory = new TemperatureConvertersCategory()
        const distanceConverterCategory = new DistanceConverterCategory()
        const weightsConverterCategory = new WeightConverterCategory()

        this.categories = [
            temperatureConverterCategory,
            distanceConverterCategory,
            weightsConverterCategory
        ]
    }

    getCategories(): ConverterCategory[] {
        return this.categories
    }
}