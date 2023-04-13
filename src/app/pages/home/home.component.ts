import { Component } from '@angular/core';
import { IHero, Hero, Coche } from './models/home.model';

@Component({
  selector: 'nova-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  heroes: IHero[] = [
    { name: 'Spiderman', city: 'New York', age: 20 },
    { name: 'Batman', city: 'Gotham' },
    { name: 'Thor', city: 'Asgard' },
  ];
  city: string;
  showList = true;
  selectedHero: IHero;
  textoboton = 'Add hero';

  coches: Coche[] = [
    { numeroPuertas: 5, color: 'Rojo', km: 0, velocidad: 200 },
  ];

  // onHeroClick(hero) {
  //   this.city = hero.city
  // }

  onHeroClick(hero: IHero, index: number) {
    this.city = hero.city;
    this.selectedHero = this.heroes[index];
  }

  onDisplay() {
    this.showList = !this.showList;
  }

  addHero() {
    // const newHero = { name: 'Catwoman', city: 'Zaragoza' };
    const newHero = new Hero('Catwoman', '123');
    this.heroes.push(newHero);

    this.coches.push(new Coche(3, 'Blanco', 1000000, 12));
    console.log('coches', this.coches);
  }

  onReset(message: string) {
    this.selectedHero = null;
    console.log('param', message);
  }
}
