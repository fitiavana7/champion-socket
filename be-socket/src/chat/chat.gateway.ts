import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket  } from 'socket.io';
import { ChatRepoService } from 'src/chat-repo/chat-repo.service';
import { UserType } from 'src/chat-repo/types';

@WebSocketGateway(8000,{cors:'*'})
export class ChatGateway {
  constructor(private chatService : ChatRepoService) {}
  
  @WebSocketServer()
  server;

  handleConnection(client : Socket){
    // console.log("ID of client connected : " + client.id);    
  }

  handleDisconnect(client : Socket){
    // console.log("ID of client disconnected : " + client.id);
  }

  @SubscribeMessage('repondre')
  handleMessage(@MessageBody() data : { score : number, user_id : number, question_id : number , reponse_id : number}){
    const valid = this.chatService.repondre(data)
    this.server.emit("reponse-question" , {valid} );
    if(valid){
      const question = this.chatService.giveQuestion()
      const users = this.chatService.getAll()
      this.server.emit("users" , users );
      this.server.emit("question" , {question} );  
    }
  }

  @SubscribeMessage('create')
  handleCreate(@MessageBody() data : {username : string , type : string}){
    const r = this.chatService.create(data)
    if(!r){
      this.server.emit(`reponse-valid-${data.username}` , null );
    }else{
    this.server.emit(`reponse-valid-${data.username}` , r );
    }
    const users = this.chatService.getAll()
    this.server.emit("users" , users );

  }

  @SubscribeMessage('get-question')
  handleGetQuestion(@MessageBody() data ){
    const question = this.chatService.giveQuestion()
    this.server.emit("question" , {question} );
  }


  @SubscribeMessage('get-users')
  handleGetUsers(){    
    const users = this.chatService.getAll()
    this.server.emit("users" , users );
  }

  @SubscribeMessage('begin')
  handleBegin(@MessageBody() data){    
    this.chatService.begin(data.user_id)
    this.server.emit('begining' , {begining : true} );
  }

  @SubscribeMessage('delete')
  handleDelete(@MessageBody() data : {id:number}){
    this.chatService.supprimer(data.id)    
    const users = this.chatService.getAll()
    this.server.emit("users" , users );
  }

}
