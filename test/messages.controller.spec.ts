// messages.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from '../src/messages/message.controller';
import { MessageService } from '../src/messages/message.service';
import { WebsocketGateway } from '../src/websocket/websocket.gateway';

describe('MessagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [MessageService, WebsocketGateway],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Add more tests as needed
});
