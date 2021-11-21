import { Controller, Get, Post, Param,Put, Delete, Body } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create.todo.dto';
import { UpdateTodoDto } from './dtos/update.todo.dto';
import { TodoService } from './todo.service';
import { ITodo } from './interfaces/todo.interface';

@Controller('todo')
export class TodoController {
  constructor ( private readonly TodoService: TodoService  ){}
   @Get()
   async getAll():Promise <ITodo[]>{
     return this.TodoService.getAll()
   }

   @Get(':id')
   async getOne(@Param('id') id:string):Promise <ITodo> {
     return this.TodoService.getOne(id)
   }
   @Post()
   async save(@Body() todoDato:CreateTodoDto):Promise <ITodo> {
     return this.TodoService.create(todoDato)
   }
   @Delete(':id')
   async destroy(@Param('id') id:string ):Promise <ITodo> {
     return this.TodoService.destroy(id)
   }
   @Put(':id')
   async update(@Param('id') id:string, @Body() todoDato :UpdateTodoDto ){
     return this.TodoService.update(id,todoDato)

   }

}