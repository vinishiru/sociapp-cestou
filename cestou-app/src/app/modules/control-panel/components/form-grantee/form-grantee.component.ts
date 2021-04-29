import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grantee } from 'src/app/interfaces/grantee';
import { GranteeService } from 'src/app/services/grantee.service';
import { defaultRouteAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'form-grantee',
  templateUrl: './form-grantee.component.html',
  styleUrls: ['./form-grantee.component.css'],
  animations: [defaultRouteAnimation]
})
export class FormGranteeComponent implements OnInit {

  grantee?: Grantee;

  constructor(private granteeService: GranteeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id)
      this.grantee = this.granteeService.getGrantee(+id);

  }

  onSubmit(): void {

  }

}
