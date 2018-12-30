import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { ContactComponent } from "./contact/contact.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardService } from "./dashboard/dashboard.service";
import { ContactService } from "./contact/contact.service";
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ContactComponent,
    DashboardComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DashboardService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
