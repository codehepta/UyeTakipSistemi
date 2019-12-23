//import { Directive, Input } from '@angular/core';
//import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';

//@Directive({
//  selector: '[appUsernamecheck]'
//})
//export class UsernamecheckDirective implements Validator {
//  validate(control: AbstractControl): ValidationErrors {
//    return (control: AbstractControl): { [key: string]: any } | null => {
//      const forbidden = nameRe.test(control.value);
//      return forbidden ? { 'forbiddenName': { value: control.value } } : null;
//    };
//  }
//  //registerOnValidatorChange?(fn: () => void): void {
//  //    throw new Error("Method not implemented.");
//  //}
//  @Input('appUserName') userName: string;
//  constructor() { }

//}
