import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { PassengerProvider } from "../providers/passenger.provider";

@Controller('passengers')
export class PassengerController {
  constructor(
    private readonly rootProvider: PassengerProvider,
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