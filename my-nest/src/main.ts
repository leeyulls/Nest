import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transform } from 'node:stream';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true, //dto 데코레이터 지정된 속성(whitelist) 통과, 나머지는 제외시킴 (오류로 발생하지는 않음)
      forbidNonWhitelisted:true, //dto 데코레이터 등록되지 않은 속성(whitelist 아닌)이 들어오면 제외대신 오류발생 (해당 옵션 사용 위해서는 whitelist:true 필수)
      transform: true // url 통해 들어온 값을 원하는 타입으로 변경해줌 
    })
  ) //데이터 유효성 검사 
  await app.listen(3000);
}
bootstrap();
