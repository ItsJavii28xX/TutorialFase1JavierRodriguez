import { Component } from '@angular/core';

@Component({
  selector: 'prueba',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  contador: number = 0

  constructor() {

  }

  /**
   * incrementarContador
   */
  public incrementarContador() {

    this.contador++
    
  }

}
