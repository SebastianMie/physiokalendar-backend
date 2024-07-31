import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Therapist } from '../entities/therapist.entity';

@Injectable()
export class TherapistService {
  constructor(
    @InjectRepository(Therapist)
    private therapistRepository: Repository<Therapist>,
  ) {}

  findAll(): Promise<Therapist[]> {
    return this.therapistRepository.find();
  }

  findOne(id: number): Promise<Therapist> {
    return this.therapistRepository.findOne({ where: { id } });
  }

  create(therapist: Partial<Therapist>): Promise<Therapist> {
    const newTherapist = this.therapistRepository.create(therapist);
    return this.therapistRepository.save(newTherapist);
  }

  async update(id: number, updateData: Partial<Therapist>): Promise<Therapist> {
    await this.therapistRepository.update(id, updateData);
    return this.therapistRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.therapistRepository.delete(id);
  }
}
