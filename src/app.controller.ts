import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello/:name')
  getHello(@Param('name') name: string): string {
    return this.appService.getHello(name);
  }
}
