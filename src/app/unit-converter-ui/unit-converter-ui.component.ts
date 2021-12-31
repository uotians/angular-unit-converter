import { Component, OnInit } from '@angular/core';
import { UnitConverterService } from '../unit-converter-ui/services/unit-converter.service'

@Component({
  selector: 'app-unit-converter-ui',
  templateUrl: './unit-converter-ui.component.html',
  styleUrls: ['./unit-converter-ui.component.css']
})
export class UnitConverterUiComponent implements OnInit {
  inputValueCopy = ''
  outputValueCopy = ''
  categoryValueCopy = '0'
  converterValueCopy = '0'
  inputPrompt = ''
  outputPrompt = ''
  categoryIcon = 'fa fa-home fa-2x'

  categoryModels: { name: string; index: string }[] = []
  converterModels: {
    name: string;
    index: string;
    unitIn: string; 
    unitOut: string;
  }[] = []

  constructor(private unitConverterService: UnitConverterService) { }

  ngOnInit(): void {
    this.categoryValue = '0'
    this.converterValue = '0'

    this.getCategoryModels()
    this.getConverterModels(parseFloat(this.categoryValue))
    console.log(`Get categoryModels:` + JSON.stringify(this.categoryModels))
    console.log(`Get converterModels:` + JSON.stringify(this.converterModels))
  }

  getCategoryModels() {
    const cats = this.unitConverterService.getCategories()
    for(let i = 0; i < cats.length; i++) {
      const cat = cats[i]
      this.categoryModels.push({ name: cat.getName(), index: '' + i})
    }
  }

  getConverterModels(catIndex: number) {
    const cats = this.unitConverterService.getCategories()
    const cat = cats[catIndex]
    const convs = cat.getConverters()

    this.converterModels = []
    for (let i = 0; i < convs.length; i++) {
      const conv = convs[i]
      this.converterModels.push({
        name: conv.getName(),
        index: '' + i,
        unitIn: conv.getInputUnit(),
        unitOut: conv.getOutputUnit(),
      })
    }
    
  }

  onSubmit(value: any) {
    console.log(`Submit: ${value}`)
  }

  set inputValue(value: string) {
    this.inputValueCopy = value
    const cats = this.unitConverterService.getCategories()
    const cat = cats[parseInt(this.categoryValueCopy, 10)]
    const convs = cat.getConverters()
    const conv = convs[parseInt(this.converterValueCopy, 10)]
    if (value !== '') {
      this.outputValue = conv.convert(value)
    } else {
      this.outputValue = ''
    }
  }

  get inputValue(): string {
    return this.inputValueCopy
  }

  set outputValue(value: string) {
    this.outputValueCopy = value
  }

  get outputValue(): string {
    return this.outputValueCopy
  }

  set categoryValue(value: string) {
    this.categoryValueCopy = value
    this.converterValue = '0'
    this.getConverterModels(parseFloat(value))
    this.inputValue = ''
  }

  get categoryValue(): string {
    return this.categoryValueCopy
  }

  get converterValue(): string {
    return this.converterValueCopy
  }

  set converterValue(value: string) {
    this.converterValueCopy = value
    const cats = this.unitConverterService.getCategories()
    const cat = cats[parseInt(this.categoryValueCopy, 10)]
    const convs = cat.getConverters()
    const conv = convs[parseInt(this.converterValueCopy, 10)]
    this.inputPrompt = 'Input as ' + conv.getInputUnit()
    this.outputPrompt = 'Output as ' + conv.getOutputUnit()
    this.categoryIcon = cat.getIcon()
    this.inputValue = this.outputValue
  }
  
}
