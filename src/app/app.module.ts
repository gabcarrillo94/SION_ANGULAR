import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ServiceMain1Component } from './services/serviceMain1/serviceMain1.component';
import { ServiceMain2Component } from './services/serviceMain2/serviceMain2.component';
import { ServiceMain3Component } from './services/serviceMain3/serviceMain3.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ServiceMain1Component,
    ServiceMain2Component,
    ServiceMain3Component,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
