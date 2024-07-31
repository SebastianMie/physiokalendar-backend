// src/appointment-series/appointment-series.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentSeries } from '../entities/appointment-series.entity';
import { AppointmentSeriesService } from './appointment-series.service';
import { AppointmentSeriesController } from './appointment-series.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentSeries])],
  providers: [AppointmentSeriesService],
  controllers: [AppointmentSeriesController],
})
export class AppointmentSeriesModule {}
