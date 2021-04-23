import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CityController } from "./controllers/city.controller";
import { CommentsController } from "./controllers/comments.controller";
import { PassengerController } from "./controllers/passenger.controller";
import { TripController } from "./controllers/trip.controller";
import { UserController } from "./controllers/user.controller";
import { UserTripsController } from "./controllers/userTrips.controller";

import { City } from './entities/City';
import { Comment } from './entities/Comment';
import { Passenger } from "./entities/Passenger";
import { Trip } from "./entities/Trip";
import { User } from './entities/User';
import { UserTrips } from './entities/UserTrips';

import { CityProvider } from "./providers/city.provider";
import { CommentProvider } from './providers/comment.provider';
import { PassengerProvider } from "./providers/passenger.provider";
import { TripProvider } from "./providers/trip.provider";
import { UserProvider } from "./providers/user.provider";
import { UserTripsProvider } from "./providers/userTrips.provider";

@Module({
  imports: [
    TypeOrmModule.forFeature([ City, Comment, User, Trip, Passenger, UserTrips ])
  ],
  exports: [TypeOrmModule],
  controllers: [
    CityController,
    CommentsController,
    UserController,
    TripController,
    PassengerController,
    UserTripsController
  ],
  providers: [
    CityProvider,
    CommentProvider,
    UserProvider,
    TripProvider,
    PassengerProvider,
    UserTripsProvider
  ]
})

export class MainModule {}