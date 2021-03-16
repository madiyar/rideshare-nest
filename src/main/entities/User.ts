import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Passenger } from "./Passenger";
import { Trip } from "./Trip";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({unique: true})
  phone: string;

  @Column()
  password: string;

  @OneToMany(type => Trip, trip => trip.driverId)
  trips: Promise<Trip[]>;

  @OneToMany(type => Passenger, passenger => passenger.userId)
  passengers: Promise<Passenger[]>;
}