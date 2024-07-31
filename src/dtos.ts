// src/dtos.ts
// src/dtos.ts
import { IsString, IsDate, IsBoolean, IsInt, IsArray, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { Weekday, Time } from './enums';

export class JSONCancellation {
  @IsDate()
  date: Date;

  @IsString()
  patient: string;
}

export class JSONAppointmentSeries {
  @IsString()
  id: string;

  @IsString()
  therapist: string;

  @IsString()
  therapistID: string;

  @IsString()
  patient: string;

  @IsString()
  startTime: Time;

  @IsString()
  endTime: Time;

  @IsString()
  comment: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsBoolean()
  isBWO: boolean;

  @IsInt()
  interval: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JSONCancellation)
  cancellations: JSONCancellation[];
}


export class JSONPatientDto {
  @IsString()
  firstName: string;

  @IsString()
  name: string;

  @IsDate()
  activeSince: Date;

  @IsDate()
  activeUntil: Date;

  @IsBoolean()
  isBWO: boolean;
}


export class JSONSingleAppointment {
  @IsString()
  id: string;

  @IsString()
  therapist: string;

  @IsString()
  therapistID: string;

  @IsString()
  patient: string;

  @IsString()
  startTime: Time;

  @IsString()
  endTime: Time;

  @IsString()
  comment: string;

  @IsBoolean()
  isHotair: boolean;

  @IsBoolean()
  isUltrasonic: boolean;

  @IsBoolean()
  isElectric: boolean;
}

export class JSONAbsence {
  @IsString()
  day: Weekday | string;

  @IsString()
  start: string;

  @IsString()
  end: string;
}

export class JSONException {
  @IsString()
  day: string;

  @IsString()
  start: string;

  @IsString()
  end: string;
}

export class JSONTherapist {
  @IsString()
  name: string;

  @IsString()
  id: string;

  @IsDate()
  activeSince: Date;

  @IsDate()
  activeUntil: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JSONAbsence)
  absences: JSONAbsence[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JSONException)
  exceptions: JSONException[];
}

// DTOs für die Datenvalidierung

export class CreateCancellationDto {
    @IsString()
    date: string;
  
    @IsString()
    patient: string;
  }
  
  export class CreateAppointmentSeriesDto {
    @IsString()
    id: string;
  
    @IsString()
    therapist: string;
  
    @IsString()
    therapistID: string;
  
    @IsString()
    patient: string;
  
    @IsEnum(Time)
    startTime: Time;
  
    @IsEnum(Time)
    endTime: Time;
  
    @IsString()
    comment: string;
  
    @IsInt()
    startDate: number;
  
    @IsInt()
    endDate: number;
  
    @IsBoolean()
    isBWO: boolean;
  
    @IsInt()
    interval: number;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCancellationDto)
    cancellations: CreateCancellationDto[];
  }
  
  export class CreateSingleAppointmentDto {
    @IsString()
    id: string;
  
    @IsString()
    therapist: string;
  
    @IsString()
    therapistID: string;
  
    @IsString()
    patient: string;
  
    @IsEnum(Time)
    startTime: Time;
  
    @IsEnum(Time)
    endTime: Time;
  
    @IsString()
    comment: string;
  
    @IsBoolean()
    isHotair: boolean;
  
    @IsBoolean()
    isUltrasonic: boolean;
  
    @IsBoolean()
    isElectric: boolean;
  }
  
  export class CreateAbsenceDto {
    @IsEnum(Weekday)
    day: Weekday | string;
  
    @IsEnum(Time)
    start: Time;
  
    @IsEnum(Time)
    end: Time;
  }
  
  export class CreateExceptionDto {
    @IsString()
    day: string;
  
    @IsEnum(Time)
    start: Time;
  
    @IsEnum(Time)
    end: Time;
  }
  
  export class CreateTherapistDto {
    @IsString()
    name: string;
  
    @IsString()
    id: string;
  
    @IsInt()
    activeSince: number;
  
    @IsInt()
    activeUntil: number;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAbsenceDto)
    absences: CreateAbsenceDto[];
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateExceptionDto)
    exceptions: CreateExceptionDto[];
  }