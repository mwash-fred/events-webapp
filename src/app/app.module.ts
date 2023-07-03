import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { BillingModule } from './billing/billing.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PublicModule,
    AuthModule,
    SharedModule,
    BillingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
