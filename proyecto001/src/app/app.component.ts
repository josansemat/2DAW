import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'Pepe';
  edad = 21;
  fumador = false;
  sueldos=[1500, 2000, 3000];
  provinccias=[
    {id:1, nombre:'Madrid'},
    {id:2, nombre:'Sevilla'},
    {id:3, nombre:'Cadiz'},
    {id:4, nombre:'Huelva'},
    {id:5, nombre:'Barcelona'},
  ];
    esFumador(){
      return this.fumador ? 'Es fumador' : 'No es fumador';
    }
    diHola(){
      alert('Hola');
    }
    contador=0;
    incremetar(){
      this.contador++;
    }
    decrementar(){
      this.contador--;
    }
}
