// src/entities/cancellation.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AppointmentSeries } from './appointment-series.entity';
import { Patient } from './patient.entity';

@Entity('cancellations') // explizite Angabe des Tabellennamens
export class Cancellation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => AppointmentSeries, (series) => series.cancellations)
  appointmentSeries: AppointmentSeries;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => Patient, (patient) => patient.cancellations)
  patient: Patient;
}
