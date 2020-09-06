import { OtaResponse, Ota } from './../../featured-modules/ota-updates/ota.model';
import * as Chance from 'chance';
import { RulesResponse } from '../../featured-modules/rules/rules.models';
import { Device, DeviceResponse } from '../models/data-table.model';
import { DatePipe } from '@angular/common';

const datePipe = new DatePipe('en-US');
const action = [
  'Turn On AC',
  'Turn Off AC',
  'Start Meeting',
  'End Meeting',
  'Turn On Projector',
  'Turn off Projector',
  'Focus On',
  'Focus Off',
];
const deviceTypes = [
  'Jack Sensing',
  'Hester Sensing',
  'Viola Sensing',
  'Sara Sensing',
  'Lloyd Sensing',
  'Clara Sensing',
  'Shawn Sensing',
  'Nelle Sensing',
  'Celia Sensing',
  'George Sensing',
  'Leah Sensing',
  'Ophelia Sensing',
  'Stephen Sensing',
  'Mayme Sensing',
  'Fred Sensing',
  'Elsie Sensing',
  'Bill Sensing',
  'Claudia Sensing',
  'Addie Sensing',
  'Callie Sensing',
  'Johnny Sensing',
  'Eugene Sensing',
];

export const chance = new Chance() as Chance.Chance;
export const ruleDeviceGenerator = (size = 20): RulesResponse => {
  return {
    message: 'Rules fetched successfully',
    status: 'success',
    data: {
      rules: Array.from({ length: size }, () => {
        return {
          _id: chance.string({ alpha: true, numeric: true, length: 25 }),
          actions: chance.pickset(action, chance.integer({ min: 1, max: 3 })),
          condition:
            chance.first() +
            chance.pickset(['<', '>'], 1) +
            chance.integer({
              min: 10,
              max: 99,
            }),
          createdAt: datePipe.transform(chance.date(), 'medium'),
          groupIds: ['5f4fa2f0dbd8c900279ec0c1'],
          deviceIds: [],
          createdBy: 'vishwa@virtusa.com',
          ruleName: chance.last() + ' Condition',
          updatedAt: datePipe.transform(chance.date(), 'medium'),
          type: {
            deviceType: chance.pickone(deviceTypes),
          },
        };
      }),
      total: size,
    },
  };
};
export const devicesGenerator = (size): DeviceResponse => {
  return {
    status: 'success',
    message: 'Devices fetched successfully!',
    data: {
      count: size,
      devices: Array.from(
        { length: size },
        (): Device => {
          return {
            _id: chance.string({ length: 20, alpha: true, numeric: true }),
            owner: chance.string(),
            createdAt: datePipe.transform(chance.date(), 'medium'),
            credentials: {
              accessToken: null,
              certificates: null,
            },
            operations: {
              deviceRules: [],
              deviceStatus: chance.bool(),
            },
            name: chance.first() + ' Device',
            type: {
              deviceType: chance.last() + ' Sensing',
            },
          };
        }
      ),
    },
  };
};
export const otaUpdatesGenerator = (size): OtaResponse => {
  return {
    status: 'success',
    message: 'All ota details fetched successfully',
    data: {
      ota: Array.from(
        { length: size },
        (): Ota=> {
          return {
            deviceType: chance.last() + ' Sensing',
            versionCounter: 2,
            ota: {
              _id: chance.string({ length: 20, alpha: true, numeric: true }),
              otaName: chance.first() + 'Version',
              otaVersion: '1.' + (chance.age() % 10),
              otaDescription: chance.sentence({ words: 3 }),
              fileUrl: chance.string(),
              createdAt: chance.date(),
            },
          };
        }
      ),
      total: size,
    },
  };
};
