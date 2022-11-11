import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup } from  '@angular/forms';

import { ValidatorFieldBasicForm } from '../basic-form/basic-form-validator';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  validatorFieldBasicForm = new ValidatorFieldBasicForm();

  formMaterial = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]),
    });

  form = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required, Validators.maxLength(10)]),
    ipAddress: new FormControl('', [Validators.required, Validators.pattern((/([0-5][0-5][0-5]|[0-9][0-9]|[0-9]|1[0-9][0-9])(\.([0-5][0-5][0-5]|[0-9][0-9]|[0-9]|1[0-9][0-9])){3}/g))])
    });

  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('', [Validators.required, Validators.email]);
  phoneField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  dateField = new FormControl('');
  colorField = new FormControl('#000000');
  rangeField = new FormControl('');

  categoryField =  new FormControl('value1');
  tagField =  new FormControl('value1');
  radioField =  new FormControl('Opcion2');
  radioCatField = new FormControl();


  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe( value => {
      console.log(value)
    });
  }

  getNameValue()  {
    console.log(this.nameField.value)
  }
}
