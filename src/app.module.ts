import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 6000,
    username: "postgres",
    password: "testpwd",
    database: "postgres",
    synchronize: true,

  }),
  ConfigModule.forRoot({
    load: [configuration],
    envFilePath: ".development.env",
    isGlobal: true // The module is declared as Global so it's not necessary to import it in other modules
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
