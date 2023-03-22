import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  ola(): string {
    return 'Ola';
  }
}
