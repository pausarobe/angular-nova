import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHero } from '../../pages/home/models/home.model';

@Injectable()
export class HeroService {

  heroes: IHero[] = [
    { name: 'Spiderman', city: 'New York' },
    { name: 'Batman', city: 'Gotham' },
    { name: 'Thor', city: 'Asgard' },
  ];

  newHero = new BehaviorSubject<IHero>(null);

  addHero(hero: IHero) {
    // this.heroes.push(hero);
    this.newHero.next(hero)
  }
}