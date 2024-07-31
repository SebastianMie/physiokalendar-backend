// src/entities/appointment-series.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Patient } from './patient.entity';
import { Cancellation } from './cancellation.entity';

@Entity()
export class AppointmentSeries {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //@ManyToOne(() => Patient, patient => patient.appointmentSeries)
  //patient: Patient;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @Column()
  comment: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column()
  isBWO: boolean;

  @Column()
  interval: number;

  @OneToMany(() => Cancellation, (cancellation) => cancellation.appointmentSeries)
  cancellations: Cancellation[];

  @Column()
  isHotair: boolean;

  @Column()
  isUltrasonic: boolean;

  @Column()
  isElectric: boolean;
}
