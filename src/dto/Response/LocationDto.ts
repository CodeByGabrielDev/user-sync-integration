/*
"location": {
        "street": {
          "number": 9320,
          "name": "Udbyhøjvej"
        },
        "city": "Fredeikssund",
        "state": "Hovedstaden",
        "country": "Denmark",
        "postcode": 88813,
        "coordinates": {
          "latitude": "-42.8354",
          "longitude": "157.3574"
        },

*/

import { CoordinatesDto } from "./CoordinatesDto";
import { StreetDto } from "./StreetDto";

export interface LocationDto{
    street:StreetDto;
    city:string;
    state:string;
    country:string;
    postCode:number;
    coordinates:CoordinatesDto;
}