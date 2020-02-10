import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserVisitsComponent } from "./user-visits/user-visits.component";
import { UserVisitComponent } from "./user-visit/user-visit.component";
import { UserVisitEditComponent } from "./user-visit-edit/user-visit-edit.component";


const routes: Routes = [
  {path: '', component: UserVisitsComponent, pathMatch: 'full'},
  {path: 'uservisit/:id', component: UserVisitComponent},
  {path: 'add', component: UserVisitEditComponent},
  {path: 'uservisit/edit/:id', component: UserVisitEditComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
