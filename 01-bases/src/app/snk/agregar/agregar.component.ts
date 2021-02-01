import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/snk.interface';
import { SnkService } from '../services/snk.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private snkService: SnkService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if(this.nuevo.nombre.trim().length == 0) {return;}

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.snkService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
