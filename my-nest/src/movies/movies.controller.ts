import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

constructor(private readonly moviesServiece: MoviesService){}

    @Get()
    getAll():Movie[]{
        return this.moviesServiece.getAll();
    }

    //@Get('search')
    // search(@Query('name') movieName:string){
    //    return `영화 제목으로 검색중... : ${movieName}`;
    //}

    @Get("/:id")
    getOne(@Param('id') movieId:string):Movie{
        return this.moviesServiece.getOne(movieId);
    }
  

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        //return 'This will create a movie';
        return this.moviesServiece.create(movieData);
    }



    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return this.moviesServiece.deleteOne(movieId);
    }


    //@Put() // 모두 업데이트
    //@Patch // 일부 업데이트

    @Patch('/:id')
    patch(@Param('id') movieId:string, @Body() updateData){
        //return 'This will patch a movie : ' +movieId ;
       // return {
       //     updatedMovie : movieId,
       //     ...updateData,
       // }; 
       
       return this.moviesServiece.update(movieId,updateData);
    }

  


    



}
