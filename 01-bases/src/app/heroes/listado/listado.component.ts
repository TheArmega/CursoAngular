import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes        : string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
  public heroesBorrados: string[] = [];

  borrarHeroe(): void {
    const heroeBorrado = this.heroes.shift() || '';
    this.heroesBorrados.push(heroeBorrado);
  }
}
