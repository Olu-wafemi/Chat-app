import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  console.log('Entities Path:', __dirname + '/../**/*.entity{.ts,.js}');
  const app = await NestFactory.create(AppModule);
  
  await app.listen(3000);
}
bootstrap();
