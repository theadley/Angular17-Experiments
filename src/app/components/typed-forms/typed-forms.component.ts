import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-typed-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.sass']
})
export class TypedFormsComponent {
  protected login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.login.value);
    // AbstractControl<ɵTypedOrUntyped<{password: FormControl<string | null>, email: FormControl<string | null>}, ɵFormGroupValue<{password: FormControl<string | null>, email: FormControl<string | null>}>, any>,ɵTypedOrUntyped<{password: FormControl<string | null>, email: FormControl<string | null>}, ɵFormGroupRawValue<{password: FormControl<string | null>, email: FormControl<string | null>}>, any>>.value: Partial<{email: string | null, password: string | null}>
    // The current value of the control.
    //   For a FormControl, the current value.
    //   For an enabled FormGroup, the values of enabled controls as an object with a key-value pair for each member of the group.
    //   For a disabled FormGroup, the values of all controls as an object with a key-value pair for each member of the group.
    //   For a FormArray, the values of enabled controls as an array.
    //   @angular/form

    // So you can no longer write `this.login.value.asdf` because asdf doesn't exist on the form type
    // this.login.value.email // ✅
    // this.login.value.email.domain // ❌
  }
}
