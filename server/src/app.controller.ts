import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller('/products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  productall(
    @Body() userdata,
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
  ) {
    return this.appService.productall();
  }

  @Get('/:id')
  productdetails(@Req() request: Request) {
    return this.appService.productdetails(request.params.id);
  }

  @Post()
  productcreate(@Body() userdata) {
    return this.appService.productcreate(userdata);
  }

  @Put('/:id')
  productupdate(@Body() userdata, @Req() request: Request) {
    const id = request.params.id;
    return this.appService.productupdate({ userdata, id });
  }

  @Delete('/:id')
  productdelete(@Req() request: Request) {
    return this.appService.productdelete(request.params.id);
  }
}
