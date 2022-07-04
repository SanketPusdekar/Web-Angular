import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousComponent,
    NgIfDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
