// src/models.ts
import { Weekday, Time } from './enums';

// Modelle für die internen Datenstrukturen

export interface JSONCancellation {
  date: string;
  patient: string;
}

export interface JSONAppointmentSeries {
  id: string;
  therapist: string;
  therapistID: string;
  patient: string;
  startTime: Time;
  endTime: Time;
  comment: string;
  startDate: number;
  endDate: number;
  isBWO: boolean;
  interval: number;
  cancellations: JSONCancellation[];
}

export interface JSONSingleAppointment {
  id: string;
  therapist: string;
  therapistID: string;
  patient: string;
  startTime: Time;
  endTime: Time;
  comment: string;
  isHotair: boolean;
  isUltrasonic: boolean;
  isElectric: boolean;
}

export interface JSONAbsence {
  day: Weekday | string;
  start: Time;
  end: Time;
}

export interface JSONException {
  day: string;
  start: Time;
  end: Time;
}

export interface JSONTherapist {
  name: string;
  id: string;
  activeSince: number;
  activeUntil: number;
  absences: JSONAbsence[];
  exceptions: JSONException[];
}

export interface JSONListWeekDay {
  weekday: Weekday;
  appointments: JSONAppointmentSeries[];
}

export interface JSONMasterlist {
  elements: JSONListWeekDay[];
}

export interface JSONListSingleDay {
  date: number;
  appointments: JSONSingleAppointment[];
}

export interface JSONDaylist {
  elements: JSONListSingleDay[];
}

export interface JSONBackup {
  createdDate: number;
  masterlist: JSONMasterlist;
  daylist: JSONDaylist;
  therapists: JSONTherapist[];
}
