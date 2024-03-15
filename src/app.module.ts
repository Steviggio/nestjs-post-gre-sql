import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
// import configuration from './config/configuration';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/users.module';
import { TypeOrmConfigModule } from './config/typeorm.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    UsersModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }



// ConfigModule.forRoot({
//   load: [configuration],
//   envFilePath: ".development.env",
//   isGlobal: true // The module is declared as Global so it's not necessary to import it in other modules
// })],