import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import portfinder from 'portfinder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(await portfinder.getPortPromise());
  console.log(await app.getUrl())
}
bootstrap();
