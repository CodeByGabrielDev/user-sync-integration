import { api } from "../config/api";
import { RandomUserApiResponseDto } from "../dto/Response/RandomUserApiResponseDto";
import { RandomUserResponseDto } from "../dto/Response/RandomUserResponseDto";

export class RandomUserClient{
    
    async fetchUsers():
    Promise<RandomUserResponseDto[]>{
        const response = await api.get<RandomUserApiResponseDto>(
            "/api/?results=150"
        );
        return response.data.results;
    }
}