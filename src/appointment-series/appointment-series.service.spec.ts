import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentSeriesService } from './appointment-series.service';

describe('AppointmentSeriesService', () => {
  let service: AppointmentSeriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentSeriesService],
    }).compile();

    service = module.get<AppointmentSeriesService>(AppointmentSeriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
