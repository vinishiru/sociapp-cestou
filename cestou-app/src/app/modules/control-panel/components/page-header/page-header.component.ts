import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

 @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
