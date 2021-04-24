import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{ titulo }} </h1> <!--podemos escribir cualquier expresion de js entre los dobles{{}}-->

    <h3>La base es: <strong> {{ base }} </strong></h3>

    <button (click)="acumular(base)">+ {{ base }} </button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-base)">- {{ base }}</button>

    <!-- <button (click)="acumular(+1)">+ {{ base }} </button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-1)">- {{ base }}</button> -->
    `
})

export class ContadorComponent{
    public titulo: string = 'Contador App'; //añadimos el tipo de tipado :string y si la propiedad será public o private(opcional)
    numero: number = 10;

    base: number = 5;

    acumular( valor: number ){
        // valor = valor * this.base
        this.numero += valor;//this. para hacer referencia a la clase actual
    }
}