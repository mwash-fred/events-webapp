import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  billingForm !: FormGroup;
constructor(private fb: FormBuilder){
  this.billingForm = this.fb.group({
    mobileNo: ['', Validators.required]
  })
}

}
