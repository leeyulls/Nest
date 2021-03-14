import { IsNotIn, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto{

    @IsString()
    readonly title:string;
    @IsNumber()
    readonly year:number;
    
    @IsOptional() //필수 요소가 아니라는 뜻
    @IsString({each:true}) // 모든 요소를 검사한다는 뜻
    readonly genres: string[];


}