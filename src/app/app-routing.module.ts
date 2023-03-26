import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnereditComponent } from './partneredit/partneredit.component';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';

const routes: Routes = [
  { path: "partnerlist", component: PartnerlistComponent },
  { path: "partneredit/:id", component: PartnereditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
