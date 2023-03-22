import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  providers: [PrismaService],
})
export class AppModule {}
