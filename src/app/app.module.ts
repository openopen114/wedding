import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
 
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroBGComponent } from './hero-bg/hero-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroBGComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
