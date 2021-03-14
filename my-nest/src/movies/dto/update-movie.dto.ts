import { PartialType } from "@nestjs/mapped-types";
import { IsNotIn, IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto){

    @IsString()
    readonly title?:string;  //?: > 필수가 아니라는 뜻

    @IsNumber()
    readonly year?:number;

    @IsString({each:true}) // 모든 요소를 검사한다는 뜻
    readonly genres?: string[];


}