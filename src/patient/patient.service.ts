import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'; // UUID importieren
import { Patient } from '../entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  findAll(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  findOne(id: string): Promise<Patient> {
    return this.patientRepository.findOne({ where: { id } });
  }

  create(patientData: Partial<Patient>): Promise<Patient> {
    const newPatient = this.patientRepository.create({
      ...patientData,
      id: uuidv4(), // Generiere eine neue UUID
    });
    return this.patientRepository.save(newPatient);
  }

  async update(id: string, updateData: Partial<Patient>): Promise<Patient> {
    await this.patientRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.patientRepository.delete(id);
  }
}
