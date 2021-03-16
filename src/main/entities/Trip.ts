import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { City } from "./City";
import { Passenger } from "./Passenger";
import { User } from "./User";

@Entity({ name: 'trips' })
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  day: string;

  @Column()
  seats: number;

  @Column()
  price: number;
  
  @Column()
  driverId: number;

  @Column()
  fromId: number;

  @Column()
  toId: number;

  @ManyToOne(type => User, driver => driver.id, { eager: true })
  driver: User;

  @ManyToOne(type => City, from => from.id, { eager: true })
  from: City;

  @ManyToOne(type => City, to => to.id, { eager: true })
  to: City;

  @OneToMany(type => Passenger, passenger => passenger.tripId)
  passengers: Promise<Passenger[]>;
}