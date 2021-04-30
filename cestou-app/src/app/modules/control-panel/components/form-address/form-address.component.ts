import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Address } from 'src/app/interfaces/address';

@Component({
  selector: 'form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  @Input() title: string = 'Dados de Endereço';
  @Input() subtitle: string = '';
  @Input() addressInfo?: Address;

  addressForm = this.fb.group({
    zipCode: ['', Validators.required],
    address: ['', Validators.required],
    district: ['', Validators.required],
    complement: [''],
    city: ['', Validators.required],
    state: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.addressInfo)
      this.addressForm.patchValue(this.addressInfo);
  }

  onSubmit(): void {

  }

}
