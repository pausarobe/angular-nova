import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero, IHero } from './home.model';

@Component({
  selector: 'nova-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroes: IHero[];
  showList = true;
  selectedHero: IHero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.heroes;
  }

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
    // this.heroes.push(newHero);
    this.heroService.addHero(newHero);
  }
}
