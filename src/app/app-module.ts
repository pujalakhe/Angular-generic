import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { provideStoreDevtools } from '@ngrx/store-devtools';
@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideStoreDevtools()],
  bootstrap: [App],
})
export class AppModule {}
