import { AppDataSource } from "./config/database";

async function main() {
    await AppDataSource.initialize();

    console.log("foi");
}

main();