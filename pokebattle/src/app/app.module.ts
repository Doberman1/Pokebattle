import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasaBgComponent } from './components/nasa-bg/nasa-bg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NasaBgComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
