// src/entities/exception.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Therapist } from './therapist.entity';

@Entity()
export class Exception {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Therapist, therapist => therapist.exceptions)
  therapist: Therapist;

  @Column()
  day: string;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;
}
