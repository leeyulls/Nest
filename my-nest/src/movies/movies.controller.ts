import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get('search')
    search(@Query('name') movieName:string){
        return `영화 제목으로 검색중... : ${movieName}`;
    }
    @Get("/:id")
    getOne(@Param('id') movieId:string){
        return `This will return one movie with the id: ${movieId}`;
    }
  

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        //return 'This will create a movie';
        return movieData;
    }


    
    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return 'This will delete a movie : ' +movieId ;
    }


    //@Put() // 모두 업데이트
    //@Patch // 일부 업데이트

    @Patch('/:id')
    patch(@Param('id') movieId:string, @Body() updateData){
        //return 'This will patch a movie : ' +movieId ;
        return {
            updatedMovie : movieId,
            ...updateData,
        };       
    }

  



}
