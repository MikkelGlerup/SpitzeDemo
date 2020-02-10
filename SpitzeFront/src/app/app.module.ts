import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserVisitsComponent } from './user-visits/user-visits.component';
import { UserVisitComponent } from './user-visit/user-visit.component';
import { UserVisitEditComponent } from './user-visit-edit/user-visit-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserVisitsComponent,
    UserVisitComponent,
    UserVisitEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
