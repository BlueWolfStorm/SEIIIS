import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { AboutIsComponentComponent } from './about-is-component/about-is-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootbarComponent,
    MapComponentComponent,
    AboutIsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
