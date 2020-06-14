import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Order from './order';

@Entity('user')
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    cpf: string;

    @Column()
    created_at: string;

    @OneToMany(type => Order, orders => Order)
    orders: Order[]

}