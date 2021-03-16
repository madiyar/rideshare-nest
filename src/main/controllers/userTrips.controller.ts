import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from "@nestjs/common";
import { UserTripsProvider } from "../providers/userTrips.provider";
import { NotFoundInterceptor } from "../shared/notfound";

@Controller('user_trips')
@UseInterceptors(new NotFoundInterceptor())
export class UserTripsController {
  constructor(
    private readonly rootProvider: UserTripsProvider
  ) {}

  @Get()
  getAll() {
    return this.rootProvider.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.rootProvider.getById(id);
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