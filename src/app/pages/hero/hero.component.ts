import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../../services/hero.service';

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

  constructor(
    private heroService: HeroService
  ) {}

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
      this.heroService.addHero({
        name: this.name.value,
        city: this.city.value
      });
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
