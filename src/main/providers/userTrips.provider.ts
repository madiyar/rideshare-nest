import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserTrips } from "../entities/UserTrips";

@Injectable()
export class UserTripsProvider {
  constructor(
    @InjectRepository(UserTrips)
    private readonly repository: Repository<UserTrips>
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
  create(data: UserTrips) {
    return this.repository.save(data);
  }

  // UPDATE
  update(id: number, data: Partial<UserTrips>) {
    return this.repository.update(id, data);
  }

  // DELETE BY ID
  delete(id: number) {
    return this.repository.delete(id);
  }
}