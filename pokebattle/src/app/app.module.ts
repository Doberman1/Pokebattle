
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestpokeComponent } from './testpoke/testpoke.component';

import { NasaBgComponent } from './components/nasa-bg/nasa-bg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';


@NgModule({
  declarations: [
    AppComponent,

    TestpokeComponent,
    NasaBgComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
