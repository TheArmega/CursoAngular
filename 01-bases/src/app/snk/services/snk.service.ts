import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/snk.interface";

@Injectable()
export class SnkService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Eren',
          poder: 1000
        },
        {
          nombre: 'Mikasa',
          poder: 800
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}