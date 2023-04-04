import { Injectable } from '@angular/core';
import { IHero } from '../pages/home/home.model';

@Injectable()
export class HeroService {
  heroes: IHero[] = [
    { name: 'Spiderman', city: 'New York' },
    { name: 'Batman', city: 'Gotham' },
    { name: 'Thor', city: 'Asgard' },
  ];

  addHero(hero: IHero) {
    this.heroes.push(hero);
  }
}
