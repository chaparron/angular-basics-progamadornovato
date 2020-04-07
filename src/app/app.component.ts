import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo angular';
  mostrar = true;
  lenguajes:string[]=['js','ts','java'];
  frameworks:Array<any>=[
    {nombre:'Angular',pop:'70%', edad:9},
    {nombre:'React',pop:'50%', edad:5},
    {nombre:'Vuejs',pop:'20%', edad:5},
    
  ]
}
