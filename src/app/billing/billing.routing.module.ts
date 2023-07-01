import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { PaymentSuccessComponent } from "./components/payment-success/payment-success.component";
import { PaymentFailureComponent } from "./components/payment-failure/payment-failure.component";
import { authGuard } from "../guards/auth.guard";

const routes: Routes = [
    {path: "checkout", component: CheckoutComponent, canActivate: [authGuard]},
    {path: "payment-success", component: PaymentSuccessComponent, canActivate: [authGuard]},
    {path: "payment-failure", component: PaymentFailureComponent, canActivate: [authGuard]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class BillingRoutingModule {}