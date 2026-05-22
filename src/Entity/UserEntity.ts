import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity("Users_entity")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    gender!: string;

    @Column()
    title!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({
        unique: true
    })
    email!: string;

    @Column()
    birthDate!: string;

    @Column()
    age!: number;

    @Column()
    phone!: string;

    @Column()
    cell!: string;

    @Column()
    nationality!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @Column()
    country!: string;

    @Column()
    postcode!: string;

    @Column()
    latitude!: string;

    @Column()
    longitude!: string;

    @Column()
    timezoneOffset!: string;

    @Column()
    timezoneDescription!: string;

    @Column()
    uuid!: string;

    @Column()
    username!: string;

    @Column()
    registeredDate!: string;

    @Column()
    registeredAge!: number;

    @Column()
    documentName!: string;

    @Column()
    documentValue!: string;

    @Column()
    pictureLarge!: string;

    @Column()
    pictureMedium!: string;

    @Column()
    pictureThumbnail!: string;
}