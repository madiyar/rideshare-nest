import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trip } from "./Trip";

@Entity({ name: 'cities' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  region: string;

  @Column()
  map: string;

  @OneToMany(type => Trip, trip => trip.fromId)
  fromTrips: Promise<Trip[]>;

  @OneToMany(type => Trip, trip => trip.toId)
  toTrips: Promise<Trip[]>;
}