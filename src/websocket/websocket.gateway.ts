import {WebSocketGateway, SubscribeMessage, WebSocketServer, OnGatewayInit}  from '@nestjs/websockets'
import { Server } from 'socket.io'



@WebSocketGateway()
export class WebsocketGateway implements OnGatewayInit{
    @WebSocketServer()
    private server: Server

    afterInit(server: Server) {
        this.server = server;
        
    }

    @SubscribeMessage('chat')
    handleChat(client: any, payload: any ): void{
        const {roomId, message} = payload

        this.server.to('room_$(roomId)').emit('chat', message)
        

    }

}