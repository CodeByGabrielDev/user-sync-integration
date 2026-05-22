
import { AppDataSource } from "./config/database";
import { UserService } from './service/UserService';

async function main() {

    try{
    await AppDataSource.initialize();

    console.log("Banco de dados conectado com sucesso");

    const userService = new UserService();

    await userService.processUsers();
    }catch(error){
        console.error(error)
    }
}

main();