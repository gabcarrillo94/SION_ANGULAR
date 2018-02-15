import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ServiceMain1Component } from './services/serviceMain1/serviceMain1.component';
import { ServiceMain2Component } from './services/serviceMain2/serviceMain2.component';
import { ServiceMain3Component } from './services/serviceMain3/serviceMain3.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'serviceMain1', component: ServiceMain1Component},
  { path: 'serviceMain2', component: ServiceMain2Component},
  { path: 'serviceMain3', component: ServiceMain3Component}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);