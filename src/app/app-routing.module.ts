import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", loadChildren: () => import('./public/public.routing.module').then(path => path.PublicRoutingModule)},
  {path: "auth", loadChildren: () => import('./auth/auth.routing.module').then(path => path.AuthRoutingModule)},
  {path: "billing", loadChildren: () => import('./billing/billing.routing.module').then(path => path.BillingRoutingModule)},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
