import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { FriendInputComponent } from './friend-input/friend-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    FriendInputComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
