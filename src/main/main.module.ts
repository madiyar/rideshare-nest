import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CityController } from "./controllers/city.controller";
import { PassengerController } from "./controllers/passenger.controller";
import { TripController } from "./controllers/trip.controller";
import { UserController } from "./controllers/user.controller";
import { UserTripsController } from "./controllers/userTrips.controller";

import { City } from './entities/City';
import { Passenger } from "./entities/Passenger";
import { Trip } from "./entities/Trip";
import { User } from './entities/User';
import { UserTrips } from './entities/UserTrips';

import { CityProvider } from "./providers/city.provider";
import { PassengerProvider } from "./providers/passenger.provider";
import { TripProvider } from "./providers/trip.provider";
import { UserProvider } from "./providers/user.provider";
import { UserTripsProvider } from "./providers/userTrips.provider";

@Module({
  imports: [
    TypeOrmModule.forFeature([ City, User, Trip, Passenger, UserTrips ])
  ],
  exports: [TypeOrmModule],
  controllers: [
    CityController,
    UserController,
    TripController,
    PassengerController,
    UserTripsController
  ],
  providers: [
    CityProvider,
    UserProvider,
    TripProvider,
    PassengerProvider,
    UserTripsProvider
  ]
})

export class MainModule {}