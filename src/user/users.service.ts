import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(firstName: string, lastName: string): Promise<User> {
    const user = this.usersRepository.create({ firstName, lastName })
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return await this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<string> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      return "No user found with the given id";
    } else {
      return 'User deleted successfully'
    }
  }

}