import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'

@NgModule({
    imports: [
        MatToolbarModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule
    ]
})
export class MaterialModule { }