import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  @Input() title: string = 'Dados de Endereço';
  @Input() subtitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
