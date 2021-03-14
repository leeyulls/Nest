import { Controller, Get, Post } from '@nestjs/common';

@Controller('')
export class AppController {


  @Get()
  home() {
    return 'Welcome';
  }

  // @Get("/hello")
  // sayHello(): string{
  //   //url 을 가져오고 function return
  //   return this.appService.gerHi();
  // }  
}
