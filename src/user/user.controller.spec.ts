import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './user.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        firstName: 'John',
        lastName: 'Doe',
      };
      const createdUser: User = {
        id: 1, ...createUserDto,
        isActive: true
      }; // Modify this according to your User entity structure
      jest.spyOn(service, 'create').mockResolvedValue(createdUser);

      const result = await controller.create(createUserDto);

      expect(result).toEqual(createdUser);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users: User[] = [{ id: 1, firstName: 'John', lastName: 'Doe', isActive: true }]; // Modify this according to your User entity structure
      jest.spyOn(service, 'findAll').mockResolvedValue(users);

      const result = await controller.findAll();

      expect(result).toEqual(users);
    });
  });

  describe('findOne', () => {
    it('should return a user by ID', async () => {
      const user: User = { id: 1, firstName: 'John', lastName: 'Doe', isActive: true }; // Modify this according to your User entity structure
      jest.spyOn(service, 'findOne').mockResolvedValue(user);

      const result = await controller.findOne(1);

      expect(result).toEqual(user);
    });
  });

  describe('deleteOne', () => {
    it('should delete a user by ID', async () => {
      const id = 1;
      jest.spyOn(service, 'remove').mockResolvedValue('User deleted successfully');

      const result = await controller.deleteOne(id);

      expect(result).toBe('User deleted successfully');
    });
  });
});
