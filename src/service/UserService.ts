import { RandomUserClient } from "../client/RandomUserClient";
import { RandomUserResponseDto } from "../dto/Response/RandomUserResponseDto";
import { UserEntity } from "../Entity/UserEntity";
import { UserRepository } from "../repository/UserRepository";

export class UserService {
  private client = new RandomUserClient();

  async processUsers() {
    const users = await this.client.fetchUsers();
    console.log(users.length);
    const usersToSaveOrUpdate = []; // aqui eu decidi criar uma lista vazioa para 
                                    // ir preenchendo as informacoes do usuarios que sao maiores de 18
                                    
    for (const user of users) {
      if (this.isAdultUser(user.dob.age)) {
        usersToSaveOrUpdate.push(user);
      }
    }
    this.validationMethod(usersToSaveOrUpdate);
  }
  private async validationMethod(user: RandomUserResponseDto[]) {
    for (const users of user) {
      const existingUser = await UserRepository.findOne({
        where: {
          email: users.email,
        },
      });
    }
  }

  private async insertInDatabase(user: RandomUserResponseDto) {
    const userEntity = new UserEntity();
    this.auxInsertInDatabase(userEntity, user);
    await UserRepository.save(userEntity);
  }
  private auxInsertInDatabase(
    userEntity: UserEntity,
    user: RandomUserResponseDto,
  ) {
    userEntity.gender = user.gender;
    userEntity.title = user.name.title;
    userEntity.firstName = user.name.first;
    userEntity.lastName = user.name.last;
    userEntity.email = user.email;
    userEntity.birthDate = user.dob.date;
    userEntity.age = user.dob.age;
    userEntity.phone = user.phone;
    userEntity.cell = user.cell;
    userEntity.nationality = user.nat;
    userEntity.city = user.location.city;
    userEntity.state = user.location.state;
    userEntity.country = user.location.country;
    userEntity.postcode = user.location.postCode.toString();
    userEntity.latitude = user.location.coordinates.latitude;
    userEntity.longitude = user.location.coordinates.longitude;
    userEntity.timezoneOffset = user.timezone.offset;
    userEntity.timezoneDescription = user.timezone.description;
    userEntity.uuid = user.login.uuid;
    userEntity.username = user.login.username;
    userEntity.registeredDate = user.registered.date;
    userEntity.registeredAge = user.registered.age;
    userEntity.documentName = user.id.name;
    userEntity.documentValue = user.id.value;
    userEntity.pictureLarge = user.picture.large;
    userEntity.pictureMedium = user.picture.medium;
    userEntity.pictureThumbnail = user.picture.thumbnail;
  }

  private isAdultUser(age: number): boolean {
    if (age >= 18) {
      return true;
    }
    return false;
  }
  private updateUser(user: RandomUserResponseDto, userEntity: UserEntity) {}
}
