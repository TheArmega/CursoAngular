import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/snk.interface';
import { SnkService } from '../services/snk.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.snkService.personajes;
  }

  constructor(private snkService: SnkService) {}

}
