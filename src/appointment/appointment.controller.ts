import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Appointment } from '../entities/appointment.entity';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  findAll(): Promise<Appointment[]> {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Appointment> {
    return this.appointmentService.findOne(+id);
  }

  @Post()
  create(@Body() createAppointmentDto: Partial<Appointment>): Promise<Appointment> {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: Partial<Appointment>): Promise<Appointment> {
    return this.appointmentService.update(+id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.appointmentService.remove(+id);
  }
}
