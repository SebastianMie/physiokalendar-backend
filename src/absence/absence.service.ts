import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Absence } from '../entities/absence.entity';

@Injectable()
export class AbsenceService {
  constructor(
    @InjectRepository(Absence)
    private absenceRepository: Repository<Absence>,
  ) {}

  findAll(): Promise<Absence[]> {
    return this.absenceRepository.find({ relations: ['therapist'] });
  }

  findOne(id: number): Promise<Absence> {
    return this.absenceRepository.findOne({ where: { id } });
  }

  create(absence: Partial<Absence>): Promise<Absence> {
    const newAbsence = this.absenceRepository.create(absence);
    return this.absenceRepository.save(newAbsence);
  }

  async update(id: number, updateData: Partial<Absence>): Promise<Absence> {
    await this.absenceRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.absenceRepository.delete(id);
  }
}
