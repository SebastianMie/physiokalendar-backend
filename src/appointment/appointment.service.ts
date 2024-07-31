import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {}

  findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find({ relations: ['therapist', 'patient'] });
  }

  findOne(id: number): Promise<Appointment> {
    return this.appointmentRepository.findOne({ where: { id } });
  }

  create(appointment: Partial<Appointment>): Promise<Appointment> {
    const newAppointment = this.appointmentRepository.create(appointment);
    return this.appointmentRepository.save(newAppointment);
  }

  async update(id: number, updateData: Partial<Appointment>): Promise<Appointment> {
    await this.appointmentRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}
