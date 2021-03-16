import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule } from './main/main.module';

import { City } from './main/entities/City';
import { User } from './main/entities/User';
import { UserTrips } from './main/entities/UserTrips';
import { Trip } from './main/entities/Trip';
import { Passenger } from './main/entities/Passenger';

@Module({
  imports: [
    // DO'NT MODIFY MY DATABASE PLEASSEEE ^_^
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'den1.mysql5.gear.host',
      port: 3306,
      username: 'kolik',
      password: 'Ij4q72-3H_Xf',
      database: 'kolik',
      entities: [
        City,
        User,
        Trip,
        Passenger,
        UserTrips
      ],
      synchronize: true,
    }),
    MainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
