// src/appointment-series/appointment-series.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AppointmentSeriesService } from './appointment-series.service';
import { AppointmentSeries } from '../entities/appointment-series.entity';

@Controller('appointment-series')
export class AppointmentSeriesController {
  constructor(private readonly appointmentSeriesService: AppointmentSeriesService) {}

  @Get()
  findAll(): Promise<AppointmentSeries[]> {
    return this.appointmentSeriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AppointmentSeries> {
    return this.appointmentSeriesService.findOne(id);
  }

  @Post()
  create(@Body() createSeriesDto: Partial<AppointmentSeries>): Promise<AppointmentSeries> {
    return this.appointmentSeriesService.create(createSeriesDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSeriesDto: Partial<AppointmentSeries>): Promise<AppointmentSeries> {
    return this.appointmentSeriesService.update(id, updateSeriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.appointmentSeriesService.remove(id);
  }
}
