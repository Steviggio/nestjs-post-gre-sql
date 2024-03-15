// TypeORM config file template with PostGreSQL
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 10,
  })
  firstName: string;

  @Column({
    length: 15,
  })
  lastName: string;

  @Column({ default: true })
  isActive: true
}

// export const UserSchema = new EntitySchema<User>({
//   name: 'User',
//   target: User,
//   columns: {
//     id: {
//       type: Number,
//       primary: true,
//       generated: true,
//     },
//     firstName: {
//       type: String,
//     },
//     lastName: {
//       type: String,
//     },
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
// })