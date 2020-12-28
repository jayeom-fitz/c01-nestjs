import { Controller, Get, Post, Param, Delete, Patch, Body, Query } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {

  }
  
  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get("search")
  search(@Query("year") searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear} `;
  }

  @Get("/:id")
  getOne(@Param('id') movieId: number) {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
