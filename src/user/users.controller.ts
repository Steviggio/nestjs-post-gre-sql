import { Controller, Body, Post, Delete, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user-dto";
import { first } from "rxjs";


@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { firstName, lastName } = createUserDto;
    return await this.usersService.create(firstName, lastName)
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Delete(":id")
  async deleteOne(@Param('id') id: number): Promise<string> {
    return await this.usersService.remove(id)
  }

}