import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from  '@angular/forms';

import { ValidatorFieldBasicForm } from '../basic-form/basic-form-validator';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

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

validatorFieldBasicForm = new ValidatorFieldBasicForm();

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
