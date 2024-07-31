import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CancellationService } from './cancellation.service';
import { Cancellation } from '../entities/cancellation.entity';

@Controller('cancellations')
export class CancellationController {
  constructor(private readonly cancellationService: CancellationService) {}

  @Get()
  findAll(): Promise<Cancellation[]> {
    return this.cancellationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cancellation> {
    return this.cancellationService.findOne(+id);
  }

  @Post()
  create(@Body() createCancellationDto: Partial<Cancellation>): Promise<Cancellation> {
    return this.cancellationService.create(createCancellationDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCancellationDto: Partial<Cancellation>): Promise<Cancellation> {
    return this.cancellationService.update(+id, updateCancellationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cancellationService.remove(+id);
  }
}
