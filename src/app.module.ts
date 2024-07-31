import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TherapistModule } from './therapist/therapist.module';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AppointmentSeriesModule } from './appointment-series/appointment-series.module';
import { CancellationModule } from './cancellation/cancellation.module';
import { AbsenceModule } from './absence/absence.module';
import { ExceptionModule } from './exception/exception.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'physiouser',
      password: 'password',
      database: 'physiocalendar',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TherapistModule,
    PatientModule,
    AppointmentModule,
    AppointmentSeriesModule,
    CancellationModule,
    AbsenceModule,
    ExceptionModule,
  ],
})
export class AppModule {}
