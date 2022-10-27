import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Details {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    product : string

    @Column()
    quantity : number

    @Column()
    unit_price : number

    @Column()
    id_sales : number
}