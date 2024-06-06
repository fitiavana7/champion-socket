import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chat{
    @PrimaryGeneratedColumn('uuid')
    id : string ;

    @Column()
    message : string ;

    @Column()
    sender : string ;

    @Column()
    receptor : string;

    @Column()
    date : Date ;
}