import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelos/noticia';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor(private ns: NoticiasService) { }

  ngOnInit(): void {
    this.ns.get().subscribe(noticias => this.noticias = noticias)
  }

}
