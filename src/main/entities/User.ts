import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Passenger } from "./Passenger";
import { Trip } from "./Trip";
import { Comment } from "./Comment";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: '' })
  photo: string;

  @Column({unique: true})
  phone: string;

  @Column()
  password: string;

  @OneToMany(type => Trip, trip => trip.driverId)
  trips: Promise<Trip[]>;

  @OneToMany(type => Passenger, passenger => passenger.userId)
  passengers: Promise<Passenger[]>;
  
  @OneToMany(type => Comment, comments => comments.userId) //+
  comments: Promise<Comment[]>;
}