import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({name: 'comments'})
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    targetId: number;

    /* trip, usertrip, user */
    @Column({ default: 'trip' })
    type: string;

    @Column({type: 'text'})
    msg: string;

    @ManyToOne(type => User, user => user.id, {eager: true})
    user: User;
}