import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors, Query } from "@nestjs/common";
import { PassengerProvider } from "../providers/passenger.provider";
import { TripProvider } from "../providers/trip.provider";
import { NotFoundInterceptor } from "../shared/notfound";

@Controller('trips')
@UseInterceptors(new NotFoundInterceptor())
export class TripController {
  constructor(
    private readonly rootProvider: TripProvider,
    private readonly pasProvider: PassengerProvider
  ) {}

  @Get()
  getAll(@Query() query) {
    const result = new Promise((resolve) => {
      this.rootProvider.getAll(query && { where: query }).then(trips => {
        const res = trips.map(trip => {
          return this.pasProvider.getAll({ where: {tripId: trip.id} }).then(passengers => {
            return {
              ...trip,
              driver: {
                ...trip?.driver,
                avatar: `https://picsum.photos/seed/${trip?.driver?.id}/200/200`
              },
              passengers: passengers?.map(passenger => ({
                ...passenger?.user,
                avatar: `https://picsum.photos/seed/${passenger?.user?.id}/200/200`
              }))
            }
          })
        });
        Promise.all(res).then(trips => resolve(trips))
      });
    });
    return result;
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    const result = new Promise((resolve) => {
      this.rootProvider.getById(id).then(trip => {
        if (trip === undefined) {
          resolve(undefined);
        } else {
          this.pasProvider.getAll({ where: {tripId: id} }).then(passengers => {
            resolve({
              ...trip,
              driver: {
                ...trip?.driver,
                avatar: `https://picsum.photos/seed/${trip?.driver?.id}/200/200`
              },
              passengers: passengers?.map(passenger => ({
                ...passenger?.user,
                avatar: `https://picsum.photos/seed/${passenger?.user?.id}/200/200`
              }))
            });
          })
        }
      })
    });
    return result;
  }

  @Post()
  create(@Body() data) {
    return this.rootProvider.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return this.rootProvider.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.rootProvider.delete(id);
  }
}