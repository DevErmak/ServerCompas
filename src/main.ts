import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import fastifyCors from '@fastify/cors';
import fastifyCookie from '@fastify/cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  await app.register(fastifyCookie, {
    secret: 'secret',
  });

  // app.register(fastifyCors, {
  //   origin: /\*/,
  //   allowedHeaders: [
  //     'Origin',
  //     'X-Requested-With',
  //     'Accept',
  //     'Content-Type',
  //     'Authorization',
  //   ],
  //   methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  // });
  // app.enableCors();
  // var corsOptions = {
  //   origin: 'http://localhost:3000'
  //   credentials: true,
  // };
  // app.use(fastifyCors(corsOptions));
  await app.listen(3500);
}
bootstrap();
