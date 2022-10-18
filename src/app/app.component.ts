import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  aplicarSonido(numero: number): void{
    const audio = new Audio();
    audio.src = "../assets/sonidos/note" + numero + ".wav";
    audio.load();
    audio.play();
  }

  dadoIzquierda = "../assets/img/dice1.png";
  dadoDerecha = "../assets/img/dice4.png";
  numero1: number;
  numero2: number;
  constructor(){
    this.numero1 = 1;
    this.numero2 = 2;
  }
  
  tirarDados(): void{
    this.numero1 = Math.round(Math.random() * 5 + 1);
    this.numero2 = Math.round(Math.random() * 5 + 1);
    this.dadoIzquierda = "../assets/img/dice" + this.numero1 + ".png";
    this.dadoDerecha = "../assets/img/dice" + this.numero2 + ".png";
  }
}
