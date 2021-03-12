import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelos/noticia';
import { NoticiasService } from 'src/app/servicios/noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent implements OnInit {

  noticia: Noticia;

  constructor(private ns: NoticiasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.cargar(param))
  }

  cargar(param) {
    const id = param.get('id');
    this.ns.getPorId(id).subscribe(noticia => this.noticia = noticia)
  }

}
