import { Test, TestingModule } from '@nestjs/testing';
import { ChatRepoController } from './chat-repo.controller';

describe('ChatRepoController', () => {
  let controller: ChatRepoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatRepoController],
    }).compile();

    controller = module.get<ChatRepoController>(ChatRepoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
