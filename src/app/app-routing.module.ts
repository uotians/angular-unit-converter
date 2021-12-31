import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { UnitConverterUiComponent } from './unit-converter-ui/unit-converter-ui.component';

const routes: Routes = [
  { path: '', component: UnitConverterUiComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
