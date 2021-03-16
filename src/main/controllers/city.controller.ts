import { Controller, Get, Param } from "@nestjs/common";
import { CityProvider } from "../providers/city.provider";

@Controller('cities')
export class CityController {
  constructor(
    private readonly rootProvider: CityProvider,
  ) {}

  @Get()
  getAll() {
    return this.rootProvider.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.rootProvider.getById(id);
  }

}