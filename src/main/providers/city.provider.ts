import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { City } from "../entities/City";

@Injectable()
export class CityProvider {
  constructor(
    @InjectRepository(City)
    private readonly repository: Repository<City>
  ) {}

  // GET ALL IN TABLE
  getAll(criteria = {}) {
    return this.repository.find(criteria);
  }

  // GET BY ID
  getById(id: number) {
    return this.repository.findOne(id);
  }

  getOne(criteria = {}) {
    return this.repository.findOne(criteria);
  }
}