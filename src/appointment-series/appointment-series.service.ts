import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentSeries } from '../entities/appointment-series.entity';

@Injectable()
export class AppointmentSeriesService {
  constructor(
    @InjectRepository(AppointmentSeries)
    private appointmentSeriesRepository: Repository<AppointmentSeries>,
  ) {}

  findAll(): Promise<AppointmentSeries[]> {
    return this.appointmentSeriesRepository.find({ relations: ['therapist', 'patient', 'cancellations'] });
  }

  findOne(id: string): Promise<AppointmentSeries> {
    return this.appointmentSeriesRepository.findOne({ where: { id } });
  }

  create(appointmentSeries: Partial<AppointmentSeries>): Promise<AppointmentSeries> {
    const newSeries = this.appointmentSeriesRepository.create(appointmentSeries);
    return this.appointmentSeriesRepository.save(newSeries);
  }

  async update(id: string, updateData: Partial<AppointmentSeries>): Promise<AppointmentSeries> {
    await this.appointmentSeriesRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.appointmentSeriesRepository.delete(id);
  }
}
