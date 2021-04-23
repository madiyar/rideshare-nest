import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "../entities/Comment";

@Injectable()
export class CommentProvider {

    constructor(
        @InjectRepository(Comment)
        private readonly respository: Repository<Comment>
    ) {}

    // GET ALL IN TABLE
    getAll(criteria = {}) {
        return this.respository.find(criteria);
    }

    // GET BY ID
    getById(id: number) {
        return this.respository.findOne(id);
    }

    // INSERT INTO
    create(data: Comment) {
        return this.respository.save(data);
    }

    // UPDATE
    update(id: number, data: Partial<Comment>) {
        return this.respository.update(id, data);
    }

    // DELETE BY ID
    delete(id: number) {
        return this.respository.delete(id);
    }

}