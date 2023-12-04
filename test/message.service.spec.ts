import { MessageService } from '../src/messages/message.service';
import { Test, TestingModule } from '@nestjs/testing';
import { WebsocketGateway } from '../src/websocket/websocket.gateway';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Message } from 'src/messages/message.entity';

describe("MessageService", ()=>{
    let service: MessageService;

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MessageService,
                {
                    provide: getRepositoryToken(Message),
                    useValue: {}
                }
            ]
        }).compile()
        service = module.get<MessageService>(MessageService)

    })
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    })

})