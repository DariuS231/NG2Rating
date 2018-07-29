import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { AppComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, RatingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
