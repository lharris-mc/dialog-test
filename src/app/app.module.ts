import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppDialogComponent } from './app-dialog/app-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppDialogComponent]
})
export class AppModule { }
