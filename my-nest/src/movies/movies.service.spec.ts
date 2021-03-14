import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => { // 테스트 하기전 실행되는 부분
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined(); // 서비스가 정의되었는지 확인
  });

  it("should be 4",()=>{
    expect(2+3).toEqual(5);
  });
});
