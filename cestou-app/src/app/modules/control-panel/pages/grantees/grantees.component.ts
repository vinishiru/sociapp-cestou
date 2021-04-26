import { Component, OnInit } from '@angular/core';
import { Grantee } from 'src/app/interfaces/grantee';
import { GranteeService } from 'src/app/services/grantee.service';

@Component({
  selector: 'app-grantees',
  templateUrl: './grantees.component.html',
  styleUrls: ['./grantees.component.css']
})
export class GranteesComponent implements OnInit {

  ownedGrantees: Grantee[] = [];

  constructor(private granteeService: GranteeService) { }

  ngOnInit(): void {
    this.ownedGrantees = this.granteeService.getGranteesByOwner(1);
  }

}
