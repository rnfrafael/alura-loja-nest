import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async listaUsuarios() {
    return this.prisma.usuarios.findMany();
  }
}
