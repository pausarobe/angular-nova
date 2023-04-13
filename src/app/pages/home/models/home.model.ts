export interface IHero {
  name: string, 
  city: string,
  age?: number,
}

export class Hero {
  name: string;
  city: string;
  constructor(paramName: string, paramCity: string) {
    this.name = paramName;
    this.city = paramCity;
  }
}

export class Coche {
  numeroPuertas: number;
  color: string;
  km: number;
  velocidad: number;
  constructor(primer, segundo, tercero, cuarto) {
    this.numeroPuertas = primer;
    this.color = segundo;
    this.km = tercero;
    this.velocidad = cuarto;
  }
}