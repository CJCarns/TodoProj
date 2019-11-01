import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import User from './user';
import Todo from './todo';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar' })
  name

  @ManyToOne(() => User, (user) => user.category)
  user
}
