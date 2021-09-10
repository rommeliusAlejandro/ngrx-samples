import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {DataService} from "./db/data.service";
import {ProductsModule} from "./products/products.module";
import {ApiIntegrationModule} from "./api-integration/api-integration.module";
import {StateManagementModule} from "./state-management/state-management.module";
import {AnalyticsModule} from "./analytics/analytics.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    ApiIntegrationModule,
    AnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
