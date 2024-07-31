// src/entities/patient.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Appointment } from './appointment.entity';
import { Cancellation } from './cancellation.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  name: string;

  @Column({ type: 'date' })
  activeSince: Date;

  @Column({ type: 'date' })
  activeUntil: Date;

  @Column()
  isBWO: boolean;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];

  @OneToMany(() => Cancellation, (cancellation) => cancellation.patient)
  cancellations: Cancellation[];
}
