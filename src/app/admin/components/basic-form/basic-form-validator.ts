import { FormControl } from '@angular/forms'

export class ValidatorFieldBasicForm{
  isFieldIsValid(field:FormControl){
    return field.touched && field.valid;
  }

  isFieldIsInvalid(field:FormControl){
    return field.touched && field.invalid;
  }
}
