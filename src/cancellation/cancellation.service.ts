import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancellation } from '../entities/cancellation.entity';

@Injectable()
export class CancellationService {
  constructor(
    @InjectRepository(Cancellation)
    private cancellationRepository: Repository<Cancellation>,
  ) {}

  findAll(): Promise<Cancellation[]> {
    return this.cancellationRepository.find({ relations: ['appointmentSeries', 'patient'] });
  }

  findOne(id: number): Promise<Cancellation> {
    return this.cancellationRepository.findOne({ where: { id } });
  }

  create(cancellation: Partial<Cancellation>): Promise<Cancellation> {
    const newCancellation = this.cancellationRepository.create(cancellation);
    return this.cancellationRepository.save(newCancellation);
  }

  async update(id: number, updateData: Partial<Cancellation>): Promise<Cancellation> {
    await this.cancellationRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cancellationRepository.delete(id);
  }
}
