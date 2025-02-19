import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  valor!: number;

  constructor() {
    this.generaAleatorio();
  }


  generaAleatorio() {
    this.valor = Math.floor(Math.random() * 6) + 1;
  }
}
