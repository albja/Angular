import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Li1Directive } from './li1.directive';
import { ShowContentDirective } from './show-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    Li1Directive,
    ShowContentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
