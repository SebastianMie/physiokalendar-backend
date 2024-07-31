import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exception } from '../entities/exception.entity';

@Injectable()
export class ExceptionService {
  constructor(
    @InjectRepository(Exception)
    private exceptionRepository: Repository<Exception>,
  ) {}

  findAll(): Promise<Exception[]> {
    return this.exceptionRepository.find({ relations: ['therapist'] });
  }

  findOne(id: number): Promise<Exception> {
    return this.exceptionRepository.findOne({ where: { id } });
  }

  create(exception: Partial<Exception>): Promise<Exception> {
    const newException = this.exceptionRepository.create(exception);
    return this.exceptionRepository.save(newException);
  }

  async update(id: number, updateData: Partial<Exception>): Promise<Exception> {
    await this.exceptionRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.exceptionRepository.delete(id);
  }
}
