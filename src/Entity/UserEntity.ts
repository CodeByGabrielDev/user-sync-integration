import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users_entity")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  gender!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  birthDate!: string;

  @Column()
  age!: number;

  @Column()
  phone!: string;

  @Column()
  nationality!: string;

  @Column()
  city!: string;

  @Column()
  country!: string;

  @Column()
  username!: string;
}
