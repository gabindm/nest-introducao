import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

const connectionString =
  'mongodb+srv://gabrielanery:mongodb@cluster0.taqpuxb.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(connectionString)],
  controllers: [],
  providers: [],
})
export class AppModule {}
