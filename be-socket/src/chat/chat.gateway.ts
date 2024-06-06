import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket  } from 'socket.io';
import { ChatRepoService } from 'src/chat-repo/chat-repo.service';

@WebSocketGateway(8000,{cors:'*'})
export class ChatGateway {
  constructor(private chatService : ChatRepoService) {}
  
  @WebSocketServer()
  server;

  handleConnection(client : Socket){
    console.log("ID of client connected : " + client.id);    
  }

  handleDisconnect(client : Socket){
    console.log("ID of client disconnected : " + client.id);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(@MessageBody() data : any , @ConnectedSocket() client :any): Promise<void> {
    await this.chatService.create(data)
    this.server.emit("recMessage" , data );
  }

  @SubscribeMessage('supprimer')
  async handleDelete(@MessageBody() id : string , @ConnectedSocket() client :any): Promise<void> {
    await this.chatService.supprimer(id) ;
    const data = this.chatService.get();
    this.server.emit("recMessage" , data );
  }
}
