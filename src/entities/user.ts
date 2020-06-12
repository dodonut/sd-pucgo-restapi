import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export default class User {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private firstname: string;

    @Column()
    private lastname: string;

    @Column()
    private cpf: string;

    @Column()
    private created_at: string;

}