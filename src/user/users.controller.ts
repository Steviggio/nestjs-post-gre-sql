import { Controller, Body, Post, Delete, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.entity";


@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findOne(id: number): Promise<User> {
    const user = await this.usersService.findOne(id);
    return user
  }

  @Get()
  async findAll(): Promise<User[]> {
    const users = await this.usersService.findAll();
    return users
  }

  // @Delete()
  // async deleteOne(id: number): Promise<void> {
  //   const user = await this.usersService.remove(id)
  //   return {}
  // }

}