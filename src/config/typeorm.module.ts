import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User, UserAuth } from "src/user/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 6000,
      username: "postgres",
      password: "testpwd",
      database: "postgres",
      entities: [User, UserAuth],
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),
    TypeOrmModule.forFeature([User, UserAuth])
  ],
})

export class TypeOrmConfigModule { };