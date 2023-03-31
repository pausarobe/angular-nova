import { Component } from '@angular/core';
import { Hero, IHero } from './home.model';

@Component({
  selector: 'nova-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  heroes: IHero[] = [
    { name: 'Spiderman', city: 'New York' },
    { name: 'Batman', city: 'Gotham' },
    { name: 'Thor', city: 'Asgard' },
  ];
  showList = true;
  selectedHero: IHero;

  onHeroClick(hero: IHero, index: number) {
    this.selectedHero = this.heroes[index];
  }

  onDisplay() {
    this.showList = !this.showList;
  }

  onReset() {
    this.selectedHero = null;
  }

  addHero() {
    const newHero = { name: 'Catwoman', city: 'Zaragoza' };
    // const newHero = new Hero('Catwoman', 'Zaragoza');
    this.heroes.push(newHero);
  }
}
