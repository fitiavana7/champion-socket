import { Controller, Delete } from '@nestjs/common';
import { ChatRepoService } from './chat-repo.service';

@Controller('chat-repo')
export class ChatRepoController {
    constructor(
        private chatservice : ChatRepoService
    ){}

    @Delete()
    async delete(id:string){
        await this.chatservice.supprimer(id)
    }
}
