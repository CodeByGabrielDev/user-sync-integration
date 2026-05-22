
import { AppDataSource } from "./config/database";
import { UserService } from './service/UserService';

async function main() {

    try{
    await AppDataSource.initialize();

    console.log("foi");

    const userService = new UserService();

    await userService.processUsers();
    }catch(error){
        console.error(error)
    }
}

main();