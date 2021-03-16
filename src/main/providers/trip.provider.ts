import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Trip } from "../entities/Trip";

@Injectable()
export class TripProvider {
  constructor(
    @InjectRepository(Trip)
    private readonly repository: Repository<Trip>
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

  // INSERT INTO
  create(data: Trip) {
    return this.repository.save(data);
  }

  // UPDATE
  update(id: number, data: Partial<Trip>) {
    return this.repository.update(id, data);
  }

  // DELETE BY ID
  delete(id: number) {
    return this.repository.delete(id);
  }
}