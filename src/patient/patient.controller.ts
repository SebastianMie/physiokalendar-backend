import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from '../entities/patient.entity';
import { JSONPatientDto } from '../dtos';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  @Post()
  create(@Body() createPatientDto: JSONPatientDto): Promise<Patient> { // JSONPatientDto als DTO verwenden
    return this.patientService.create(createPatientDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: Partial<Patient>): Promise<Patient> {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.patientService.remove(id);
  }
}
