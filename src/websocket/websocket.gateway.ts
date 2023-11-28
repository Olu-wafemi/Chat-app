import {WebSocketGateway, SubscribeMessage, WebSocketServer, OnGatewayInit}  from '@nestjs/websockets'
import { Server } from 'socket.io'



@WebSocketGateway()
export class WebsocketGateway implements OnGatewayInit{
    @WebSocketServer()
    private server: Server

    afterInit(server: Server) {
      //  this.server = server;
      console.log("Websocket Gateway initialized")
        
    }
    handleConnection(client:any, ...args: any[]){
        console.log('client connected ')
    }

    handleDisconnect(client: any){
        console.log('Client Disconnected')
    }


    //@SubscribeMessage('chat')
    handleChat(room: string, message: any ){

        console.log(message)
       

        //this.server.to('room_$(roomId)').emit('chat', message)
        this.server.to(room).emit('chat', message);


    }

}