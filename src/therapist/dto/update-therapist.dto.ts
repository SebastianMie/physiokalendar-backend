import { IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateTherapistDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsDate()
  @IsOptional()
  activeSince?: Date;

  @IsDate()
  @IsOptional()
  activeUntil?: Date;
}
