import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Grantee } from 'src/app/interfaces/grantee';
import { GranteeService } from 'src/app/services/grantee.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'form-grantee',
  templateUrl: './form-grantee.component.html',
  styleUrls: ['./form-grantee.component.css']
})
export class FormGranteeComponent implements OnInit {

  grantee?: Grantee;

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private granteeService: GranteeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id)
      this.grantee = this.granteeService.getGrantee(+id);

    if (this.grantee?.responsiblePerson)
      this.profileForm.setValue(this.grantee?.responsiblePerson);
  }

  onSubmit(): void {

  }

}
