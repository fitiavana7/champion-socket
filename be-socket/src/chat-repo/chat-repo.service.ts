import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatRepoService {
    private messages : {id :string , message : string}[] = [] ;

    create({id,message}: {id :string , message : string}){
        this.messages = [...this.messages , {id,message}]
    }

    get(){
        return this.messages ;
    }

    supprimer(id:string){
        const newMessages = this.messages.filter(res=>res.id != id)
        this.messages = newMessages ;
    }

}
