/* eslint-disable import/no-cycle */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import ToDo from './todo';
import Category from './category'

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar', unique: true })
  email

  @Column({ type: 'varchar', nullable: false })
  password

  @OneToMany(() => ToDo, (todo) => todo.user, { eager: true })
  todos

  @OneToMany(() => Category, (category) => category.user, { eager: true })
  categories
}
