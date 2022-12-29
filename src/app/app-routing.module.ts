import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceSectionComponent } from './entrance-section/entrance-section.component';


const routes: Routes = [
  { path: '', component: EntranceSectionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
