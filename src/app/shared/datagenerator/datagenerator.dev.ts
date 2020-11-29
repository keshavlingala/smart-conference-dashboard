import {Ota, OtaResponse} from '../../featured-modules/ota-updates/ota.model';
import * as Chance from 'chance';
import {RulesResponse} from '../../featured-modules/rules/rules.models';
import {Device, DeviceResponse} from '../models/data-table.model';
import {DatePipe} from '@angular/common';
import {min} from 'rxjs/operators';

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
export const deviceTypes = [
  'MedicalDevice',
  'TiSesnorTag',
  'Device Name 1',
  'Device Name 2',
  'Device Name 3',
  'Device Name 4',
  'Device Name 5',
  'Device Name 6',
  'Device Name 7',
];

export const chance = new Chance() as Chance.Chance;
export const ruleDeviceGenerator = (size = 20): RulesResponse => {
  return {
    message: 'Rules fetched successfully',
    status: 'success',
    data: {
      rules: Array.from({length: size}, () => {
        return {
          _id: chance.string({alpha: true, numeric: true, length: 25}),
          actions: chance.pickset(action, chance.integer({min: 1, max: 3})),
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
        {length: size},
        (): Device => {
          return {
            _id: chance.string({length: 20, alpha: true, numeric: true}),
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
              deviceType: chance.pickone(deviceTypes),
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
        {length: size},
        (): Ota => {
          return {
            deviceType: chance.pickone(deviceTypes),
            versionCounter: 2,
            ota: {
              _id: chance.string({length: 20, alpha: true, numeric: true}),
              otaName: chance.first() + 'Version',
              otaVersion: '1.' + (chance.age() % 10),
              otaDescription: chance.paragraph(),
              fileUrl: chance.string(),
              createdAt: datePipe.transform(chance.date(), 'mediumDate')
            },
          };
        }
      ),
      total: size,
    },
  };
};
export const groupIDGenerator = (size): string[] => {
  return Array.from({length: size}, () => {
      return chance.string({length: 25, alpha: true, numeric: true});
    }
  );
};

export const generateKeys = (type, size) => {
  return {
    deviceType: type,
    usedKeys: Array.from({length: Math.min(10, size * 2 / 3)}, () => chance.guid()),
    unusedKeys: Array.from({length: Math.min(10, size / 3)}, () => chance.guid()),
    usedCount: size * 2 / 3,
    unusedCount: size / 3
  };
};
