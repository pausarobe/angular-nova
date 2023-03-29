import { Component } from "@angular/core";
import { Hero, IHero } from "./home.model";

@Component({
  selector: 'nova-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heroes: IHero[] = [
    { name: 'Spiderman', city: 'New York' },
    { name: 'Batman', city: 'Gotham' },
    { name: 'Thor', city: 'Asgard' }
  ];
  city: string;
  showList = true;

  onHeroClick(hero: IHero) {
    this.city = hero.city
  }

  onReset() {
    this.showList = !this.showList;
  }

  addHero() {
    const newHero = { name: 'Catwoman', city: 'Zaragoza' };
    // const newHero = new Hero('Catwoman', 'Zaragoza');
    this.heroes.push(newHero);
  }
}