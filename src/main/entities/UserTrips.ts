import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { City } from "./City";
import { User } from "./User";

@Entity({ name: 'user_trips' })
export class UserTrips {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  day: string;

  @Column()
  userId: number;

  @Column()
  fromId: number;

  @Column()
  toId: number;

  @ManyToOne(type => User, user => user.id, { eager: true })
  user: User;

  @ManyToOne(type => City, from => from.id, { eager: true })
  from: City;

  @ManyToOne(type => City, to => to.id, { eager: true })
  to: City;

}