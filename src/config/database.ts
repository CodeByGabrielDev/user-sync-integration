import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../Entity/UserEntity";

export const AppDataSource = new DataSource({

    type: "better-sqlite3",

    database: "database.db",

    synchronize: true,

    logging: false,

    entities: [UserEntity]
});
