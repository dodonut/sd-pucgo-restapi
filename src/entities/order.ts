import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import User from './user';

@Entity('order')
export default class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => User, { eager: true })
    @Column()
    user_id: number

}