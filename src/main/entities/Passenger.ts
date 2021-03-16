import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Trip } from "./Trip";
import { User } from "./User";

@Entity({ name: 'passengers' })
export class Passenger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tripId: number;

  @Column()
  userId: number;

  @ManyToOne(type => User, user => user.id, { eager: true })
  user: User;
  
  @ManyToOne(type => Trip, trip => trip.id, { eager: true })
  trip: Trip;
}