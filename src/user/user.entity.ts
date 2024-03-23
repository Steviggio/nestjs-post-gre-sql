// TypeORM config file template with PostGreSQL
import { Entity, Column, PrimaryGeneratedColumn, ObjectId, ObjectIdColumn } from "typeorm";

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

Entity()
export class UserAuth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 25,
    unique: true
  })
  username: string;

  @Column({ length: 8 })
  password: string

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