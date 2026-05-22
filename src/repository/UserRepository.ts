import { AppDataSource } from "../config/database";
import { UserEntity } from "../Entity/UserEntity";

export const UserRepository = AppDataSource.getRepository(UserEntity)