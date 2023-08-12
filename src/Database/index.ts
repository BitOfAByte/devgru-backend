import { DataSource } from 'typeorm'
import {User} from "./Models/User";


export const datasource: DataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Hyg57aff",
    database: "devgru",
    entities: [User],
    synchronize: true,
    logging: "all"
});