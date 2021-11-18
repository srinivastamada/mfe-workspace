import { VanguardActivFeedModule } from './../../projects/vanguard-activ-feed/src/lib/vanguard-activ-feed.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VanguardActivFeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
