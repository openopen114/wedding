import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { ScrollToModule } from 'ng2-scroll-to';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroBGComponent } from './hero-bg/hero-bg.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroBGComponent,
    GalleryComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
