import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, Res } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

constructor(private readonly moviesServiece: MoviesService){}

    @Get()
    getAll(@Req() Req, @Res() res):Movie[]{
        console.log(res.json());
        return this.moviesServiece.getAll();
    }

    //Ver1. @Get 작동 테스트 
    //@Get('search')
    // search(@Query('name') movieName:string){
    //    return `영화 제목으로 검색중... : ${movieName}`;
    //}


    //Ver2. string 타입으로 받기 
    //@Get("/:id")
    //getOne(@Param('id') movieId:string):Movie{
    //    return this.moviesServiece.getOne(movieId);
    //}

    //Ver3. numver 타입으로 받기 
    @Get("/:id")
    getOne(@Param('id') movieId:number):Movie{
        return this.moviesServiece.getOne(movieId);
    }
  

    @Post()
    create(@Body() movieData:CreateMovieDto){
        console.log(movieData);
        movieData.genres;
        //return 'This will create a movie';
        return this.moviesServiece.create(movieData);
    }



    @Delete("/:id")
    remove(@Param('id') movieId:number){
        return this.moviesServiece.deleteOne(movieId);
    }


    //@Put() // 모두 업데이트
    //@Patch // 일부 업데이트

    @Patch('/:id')
    patch(@Param('id') movieId:number, @Body() updateData:UpdateMovieDto){
        //return 'This will patch a movie : ' +movieId ;
       // return {
       //     updatedMovie : movieId,
       //     ...updateData,
       // }; 
       
       return this.moviesServiece.update(movieId,updateData);
    }

  


    



}
