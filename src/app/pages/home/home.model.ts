export interface IHero {
  name: string;
  city: string;
}

export class Hero {
  name: string;
  city: string;
  constructor(name: string, city: string) {
    this.name = name;
    this.city = city;
  }
}