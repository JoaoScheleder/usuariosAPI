import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "containers-us-west-37.railway.app",
    port: 5453,
    username: "postgres",
    password: "" ,
    database: "railway",
    synchronize: true,
    logging: false,
    entities: ['src/entity/*.ts'],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
})
