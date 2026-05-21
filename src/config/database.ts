import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../Entity/UserEntity";

export const AppDataSource = new DataSource({
    
    type: "oracle",

    host: "localhost",

    port: 1521,

    username: "ODONTOFLOW",

    password: "senha123",

    serviceName: "XEPDB1",

    synchronize: true,

    logging: false,

    entities: [UserEntity]
});