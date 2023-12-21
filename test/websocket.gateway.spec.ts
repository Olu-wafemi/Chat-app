import { WebsocketGateway } from 'src/websocket/websocket.gateway';
import { TestingModule, Test } from '@nestjs/testing';

describe("websocketgateway", ()=>{

    let gateway: WebsocketGateway
     
    beforeEach(async()=>{

        const module: TestingModule = await Test.createTestingModule({
            providers: [WebsocketGateway]
        }).compile();
        gateway = module.get<WebsocketGateway>(WebsocketGateway);

        it('should be defined', ()=>{
            expect(gateway).toBeDefined();
        })

    })
})