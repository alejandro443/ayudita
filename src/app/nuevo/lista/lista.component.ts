import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

import { Persona } from 'src/app/users/model/persona';

@Component({
  selector: 'adra-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  personas: Persona[]=[];
  constructor(private personaService: PersonaService) { }
  inSeminario: any[] = [];
  ngOnInit(): void {
    this.get();
  }




  get(): void  {
    this.personaService.lista().subscribe((e) => {
      console.log(e);
      this.personas = e;
    });
  }


  eliminar(id: number) {
    this.personaService.delete(id).subscribe();
    this.get();
  }


}
