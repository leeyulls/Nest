import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {

    private movies: Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    //Ver1. string 타입으로 받기 
    //getOne(id:string){
    //    const movie = this.movies.find(movie => movie.id===parseInt(id)); // parseInt(id)는 +id 로 대체 가능 (+와 string을 쓰면 number로 바뀜) 
    //    if(!movie){
    //        throw new NotFoundException(`Movie wuth ID${id} not found`);
    //    }
    //    return movie;
    //}

    //Ver2. numver 타입으로 받기
    getOne(id:number){
        console.log(typeof id);
        const movie = this.movies.find(movie => movie.id==id); // parseInt(id)는 +id 로 대체 가능 (+와 string을 쓰면 number로 바뀜) 
        if(!movie){
            throw new NotFoundException(`Movie wuth ID${id} not found`);
        }
        return movie;
    }

    deleteOne(id:number):boolean{
        this.getOne(id);
        this.movies = this.movies.filter( movie =>movie.id !== +id);
        return true;
    }


    create(movieData:CreateMovieDto){
        this.movies.push({
           id: this.movies.length+1,
           ...movieData, 
        });
    }


    update(id:number, updateData:UpdateMovieDto){
        const movie = this.getOne(id);
        //console.log(updateData.id);
        this.deleteOne(id);
        this.movies.push({...movie,...updateData});

    }


}
