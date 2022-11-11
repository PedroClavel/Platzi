import { FormControl, FormGroup } from '@angular/forms';

export class ValidatorFieldBasicForm{
  isFieldIsValid(field:FormControl){
    return field.touched && field.valid;
  }

  isFieldIsInvalid(field:FormControl){
    return field.touched && field.invalid;
  }

  isFieldIsValidFormGroup(form:FormGroup, name:string){
    return form.get(name).touched && form.get(name).valid;
  }

  isFieldIsInvalidFormGroup(form:FormGroup, name:string){
    return form.get(name).touched && form.get(name).invalid;
  }
}
