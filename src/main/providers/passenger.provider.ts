import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Passenger } from "../entities/Passenger";

@Injectable()
export class PassengerProvider {
  constructor(
    @InjectRepository(Passenger)
    private readonly repository: Repository<Passenger>
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
  create(data: Passenger) {
    return this.repository.save(data);
  }

  // UPDATE
  update(id: number, data: Partial<Passenger>) {
    return this.repository.update(id, data);
  }

  // DELETE BY ID
  delete(id: number) {
    return this.repository.delete(id);
  }
}