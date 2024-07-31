import { IsString, IsDate } from 'class-validator';

export class CreateTherapistDto {
  @IsString()
  name: string;

  @IsDate()
  activeSince: Date;

  @IsDate()
  activeUntil: Date;
}
