import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ExceptionService } from './exception.service';
import { Exception } from '../entities/exception.entity';

@Controller('exceptions')
export class ExceptionController {
  constructor(private readonly exceptionService: ExceptionService) {}

  @Get()
  findAll(): Promise<Exception[]> {
    return this.exceptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Exception> {
    return this.exceptionService.findOne(+id);
  }

  @Post()
  create(@Body() createExceptionDto: Partial<Exception>): Promise<Exception> {
    return this.exceptionService.create(createExceptionDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExceptionDto: Partial<Exception>): Promise<Exception> {
    return this.exceptionService.update(+id, updateExceptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.exceptionService.remove(+id);
  }
}
