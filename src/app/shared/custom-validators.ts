import {AbstractControl, ValidatorFn} from '@angular/forms';

export class CustomValidators {

 static charactersValidator(charactersCount: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const regExp = new RegExp(`[a-zA-Z]{${charactersCount},}`);
      const characters = regExp.test(control.value);
      return !characters ? {'character': {value: control.value}} : null;
    };
  }

  static symbolsValidator(symbolsCount: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const regExp = new RegExp(`[!@#$%^&*_-]{${symbolsCount},}`);
      const symbols = regExp.test(control.value);
      return !symbols ? {'symbol': {value: control.value}} : null;
    };
  }
}

