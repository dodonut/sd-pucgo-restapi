import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('meal')
export default class Meal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: number;

    @Column()
    price: number;

}