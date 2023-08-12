import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {Rank} from "../../Utils/Roles";


@Entity({ name: "users"})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    username: string;
    
    @Column()
    password: string;
    
    @Column({ unique: true })
    callsign: string;
    
    @Column({ default: Rank.PO1 })
    rank: Rank
    
    @Column({ default: false })
    isAdmin: boolean
}