import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { CdsDatalistModule } from '@cds/angular/datalist';
import { ReactiveFormsModule } from "@angular/forms";
import { ParametersExampleComponent } from './parameters-example/parameters-example.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParametersExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdsModule,
    CdsDatalistModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
