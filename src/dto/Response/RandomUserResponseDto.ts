import { DobDto } from "./DobDto";
import { IdDto } from "./IdDto";
import { LocationDto } from "./LocationDto";
import { LoginDto } from "./LoginDto";
import { NameDto } from "./NameDto";
import { PictureDto } from "./PictureDto";
import { RegisteredDto } from "./RegisteredDto";
import { TimezoneDto } from "./TimezoneDto";

export interface RandomUserResponseDto{
    gender:string;
    name:NameDto;
    location:LocationDto;
    timezone: TimezoneDto;
    email:string;
    login:LoginDto;
    dob:DobDto;
    registered:RegisteredDto;
    phone:string;
    cell:string;
    id:IdDto;
    picture:PictureDto;
    nat:string;

}