// src/entities/therapist.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Absence } from './absence.entity';
import { Exception } from './exception.entity';
import { Appointment } from './appointment.entity';

@Entity()
export class Therapist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  activeSince: Date;

  @Column({ type: 'date' })
  activeUntil: Date;

  @OneToMany(() => Absence, (absence) => absence.therapist)
  absences: Absence[];

  @OneToMany(() => Exception, (exception) => exception.therapist)
  exceptions: Exception[];
}
