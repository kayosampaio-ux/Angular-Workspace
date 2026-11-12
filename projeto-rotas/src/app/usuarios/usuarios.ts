import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  imports: [FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {
  usuario: Usuario = {
    nome: '',
    email: ''
  };

  usuarios: Usuario[] = [];

  adicionarUsuario(): void {
    this.usuarios.push({ ...this.usuario });
    this.usuario = { nome: '', email: '' };
  }
}
