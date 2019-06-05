import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Maîtwesse Patwicia' },
      { id: 12, name: 'Dirty Papy' },
      { id: 13, name: 'Juste Michael' },
      { id: 14, name: 'Full Sac Poé' },
      { id: 15, name: 'Darth Zimon' },
      { id: 16, name: 'Trolline' },
      { id: 17, name: 'Anne-Ma' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
