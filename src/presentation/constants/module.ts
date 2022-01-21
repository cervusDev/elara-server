import { Routes } from 'nest-router';
import { UsuarioModule } from '../rest/usuario/usuario.module';

export const module: Routes = [
  {
    path: '/',
    children: [{ path: 'usuarios', module: UsuarioModule }],
  },
];
