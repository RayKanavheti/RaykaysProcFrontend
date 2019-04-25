import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

 public orderForm: FormGroup;
 public productList: FormArray;
 dat = ['hello'];
 get productFormGroup() {
  return this.orderForm.get('OrderProducts') as FormArray;
}
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.orderForm = this.fb.group({
      OrderProducts: this.fb.array([
        this.initArray(),
      ]),
    });
    this.productList = this.orderForm.get('OrderProducts') as FormArray;
  }
  initArray() {
    return this.fb.group({
      Title: ['', [Validators.required]],
      Description: ['' ],
      Quantity: ['', [Validators.required]],
    });
  }

  addProduct() {

    this.productList.push(this.initArray());
  }
  removeProduct(i: number) {

    this.productList.removeAt(i);
  }
}
