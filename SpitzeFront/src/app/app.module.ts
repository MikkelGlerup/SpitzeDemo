import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserVisitsComponent } from './user-visits/user-visits.component';
import { UserVisitComponent } from './user-visit/user-visit.component';
import { UserVisitEditComponent } from './user-visit-edit/user-visit-edit.component';
import { UserVisitService} from "./services/user-visit.service";

@NgModule({
  declarations: [
    AppComponent,
    UserVisitsComponent,
    UserVisitComponent,
    UserVisitEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserVisitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
