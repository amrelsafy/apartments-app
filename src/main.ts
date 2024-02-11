import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001
  
  await app.listen(port, () => {
    console.log("Server is now listening on port", port)
  });
}
bootstrap();
