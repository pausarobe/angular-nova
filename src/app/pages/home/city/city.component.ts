import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHero } from '../home.model';

@Component({
  selector: 'nova-city',
  templateUrl: './city.component.html',
})
export class CityComponent {
  @Input() hero: IHero;
  @Output() reset = new EventEmitter<void>();

  onReset() {
    this.reset.emit();
  }
}
