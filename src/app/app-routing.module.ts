import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactComponent } from "./contact/contact.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
