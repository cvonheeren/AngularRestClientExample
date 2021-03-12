import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/modelos/noticia';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-formulario-noticias',
  templateUrl: './formulario-noticias.component.html',
  styleUrls: ['./formulario-noticias.component.css']
})
export class FormularioNoticiasComponent implements OnInit {

  noticia: Noticia = {
    id: 0,
    titulo: '',
    fecha: '',
    imagen: '',
    textocorto: '',
    texto : ''
  };

  validado: boolean = false;

  constructor(private ns: NoticiasService, private router: Router) { }

  ngOnInit(): void {
  }

  btnAceptar(esValido: boolean): void {
    this.validado = true;

    if(!esValido) {
      return;
    }

    this.ns.post(this.noticia).subscribe(_ => {
      alert("Inserción realizada con éxito");
      this.irAListado();
    });
  }

  irAListado() {
    this.router.navigate(['/listado']);
  }
}
