import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 6000,
      username: "postgres",
      password: "testpwd",
      database: "postgres",
      entities: [User],
      synchronize: true,
      logging: false
    }),
    TypeOrmModule.forFeature([User])
  ],
})

export class TypeOrmConfigModule { };