import { RandomUserClient } from "../client/RandomUserClient";
import { RandomUserResponseDto } from "../dto/Response/RandomUserResponseDto";
import { UserEntity } from "../Entity/UserEntity";
import { UserRepository } from "../repository/UserRepository";
import * as fs from "fs";
export class UserService {
  private client = new RandomUserClient();

  async processUsers() {
    const users = await this.client.fetchUsers();
    console.log(users.length);
    const usersToSaveOrUpdate: RandomUserResponseDto[] = []; // aqui eu decidi criar uma lista vazioa para
    // ir preenchendo as informacoes do usuarios que sao maiores de 18
    for (const currentUser of users) {
      if (this.isAdultUser(currentUser.dob.age)) {
        usersToSaveOrUpdate.push(currentUser);
      }
    }
    await this.validationMethod(usersToSaveOrUpdate);
  }
  private async validationMethod(user: RandomUserResponseDto[]) {
    let inserted = 0;
    let updated = 0;
    for (const users of user) {
      const existingUser = await UserRepository.findOne({
        where: {
          email: users.email,
        },
      });
      if (existingUser) {
        await this.updateUser(users, existingUser);
        updated++; // aqui realizo a parte de inserção no relatorio em markdown
      } else {
        await this.insertInDatabase(users);
        inserted++;// aqui realizo a parte de inserção no relatorio em markdown
      }
    }

    this.generateReport(user.length, inserted, updated);
  }

  private async insertInDatabase(user: RandomUserResponseDto) {
    const userEntity = new UserEntity();
    this.auxInsertorUpdateInDatabase(userEntity, user);
    await UserRepository.save(userEntity);
  }
  private auxInsertorUpdateInDatabase(
    userEntity: UserEntity,
    user: RandomUserResponseDto,
  ) {
    userEntity.gender = user.gender;
    userEntity.firstName = user.name.first;
    userEntity.lastName = user.name.last;
    userEntity.email = user.email;
    userEntity.birthDate = user.dob.date;
    userEntity.age = user.dob.age;
    userEntity.phone = user.phone;
    userEntity.nationality = user.nat;
    userEntity.city = user.location.city;
    userEntity.country = user.location.country;
    userEntity.username = user.login.username;
  }

  private isAdultUser(age: number): boolean {
    return age >= 18;
  }
  private async updateUser(
    user: RandomUserResponseDto,
    userEntity: UserEntity,
  ) {
    this.auxInsertorUpdateInDatabase(userEntity, user);

    await UserRepository.save(userEntity);
  }

  private generateReport(processed: number, inserted: number, updated: number) {
    //aqui entra a questao de gerar o relatorio em markdown
    const report = `
          # Relatório de Processamento

          ## Resultado da Integração

          - Processados: ${processed}
          - Inseridos: ${inserted}
          - Atualizados: ${updated}

          ## Regras aplicadas

          - Apenas usuários maiores de 18 anos
          - Validação por e-mail

`;
    fs.writeFileSync("report.md", report);
  }
}
