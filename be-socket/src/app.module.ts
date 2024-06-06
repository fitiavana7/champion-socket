import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRepoService } from './chat-repo/chat-repo.service';
import { ChatRepoController } from './chat-repo/chat-repo.controller';

@Module({
  imports: [
      // TypeOrmModule.forRoot({
      //   type: 'mysql',
      //   host: 'localhost',
      //   port: 3306,
      //   username: 'root',
      //   password: 'password',
      //   database: 'chat',
      //   autoLoadEntities : true ,
      //   synchronize: true,
      // }),
      // TypeOrmModule.forFeature([]),
    ],
  controllers: [AppController, ChatRepoController],
  providers: [AppService , ChatGateway, ChatRepoService] ,
})
export class AppModule {}
