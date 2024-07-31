// src/entities/appointment.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Therapist } from './therapist.entity';
import { Patient } from './patient.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, patient => patient.appointments)
  patient: Patient;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @Column()
  comment: string;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  weekday: string;

  @Column()
  isHotair: boolean;

  @Column()
  isUltrasonic: boolean;

  @Column()
  isElectric: boolean;
}
