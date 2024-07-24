import { BadRequestException, Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ChatRepoService } from './chat-repo.service';

@Controller('user')
export class ChatRepoController {
    constructor(
        private chatservice : ChatRepoService
    ){}

    @Post()
    create(@Body() data : {username : string , type : string}){
        const y = this.chatservice.create(data)
        if (!y) { throw new BadRequestException() }
        return y
    }

    @Post('/begin')
    begin(@Body() data : {user_id : number}){
        this.chatservice.begin(data.user_id)
    }

    @Get(':id')
    getById(@Param('id') id: number){
        const found = this.chatservice.finById(id)
        if(!found){throw new BadRequestException()}
        return found
    }

    @Delete(":id")
    delete(@Param('id') id:number){
        this.chatservice.supprimer(id)
    }
}
