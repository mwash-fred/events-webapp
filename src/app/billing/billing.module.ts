import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentSuccessComponent } from '../billing/components/payment-success/payment-success.component';
import { PaymentFailureComponent } from '../billing/components/payment-failure/payment-failure.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PaymentsComponent } from '../billing/components/payments/payments.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    PaymentSuccessComponent,
    PaymentFailureComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class BillingModule { }
