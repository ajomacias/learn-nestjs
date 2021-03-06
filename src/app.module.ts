import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [TodoModule,
  MongooseModule.forRoot('mongodb://localhost:27017/todo')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}