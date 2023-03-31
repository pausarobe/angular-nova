import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nova-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  form: FormGroup;
  get name(): FormControl {
    return this.form.get('heroName') as FormControl;
  }
  get city(): FormControl {
    return this.form.get('heroCity') as FormControl;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      heroName: new FormControl(null, [Validators.required]),
      heroCity: new FormControl('NTTCity', [Validators.required, this.validateCity.bind(this)]),
    });
  }

  onSubmit() {
    console.log('form', this.form);
    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
    }
  }

  validateCity(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'NTTCity') {
      return { 'ciudadMala': true };
    } else {
      return null;
    }
  }
}
