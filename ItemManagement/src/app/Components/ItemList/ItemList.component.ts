import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-ItemList',
  templateUrl: './ItemList.component.html',
  styleUrls: ['./ItemList.component.css'],
  imports: [ReactiveFormsModule, NgFor, NgIf]
})
export class ItemListComponent {
  items: string[] = [];
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      itemControl: ['', [this.validItemCheck(this.items)]]
    });
  }

  validItemCheck(currentItems: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (typeof control.value === 'string' && control.value.trim() === '') {
        return { notEmptyString: true };
      }
      if (currentItems.includes(control.value)) {
        return { valueExists: true };
      }
      return null;
    };
  }

  addToList() {
    this.form.get('itemControl')?.updateValueAndValidity();
    if(this.form.get('itemControl')?.valid) {
      this.items.push(this.form.controls["itemControl"].value);
      this.form.get('itemControl')?.setValue('');
    }
  }
}
