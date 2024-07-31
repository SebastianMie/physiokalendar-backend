import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentSeriesController } from './appointment-series.controller';

describe('AppointmentSeriesController', () => {
  let controller: AppointmentSeriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentSeriesController],
    }).compile();

    controller = module.get<AppointmentSeriesController>(AppointmentSeriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
