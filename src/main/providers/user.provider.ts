import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/User";

@Injectable()
export class UserProvider {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
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
  create(data: Partial<User>) {
    return this.repository.save(data);
  }

  // UPDATE
  update(id: number, data: Partial<User>) {
    return this.repository.update(id, data);
  }

  // DELETE BY ID
  delete(id: number) {
    return this.repository.delete(id);
  }
}