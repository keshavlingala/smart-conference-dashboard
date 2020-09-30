import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DevicesTypeService {
  public devicesTypeData = {
    status: 'success',
    message: 'Device types fetched successfully',
    data: {
      types: [
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Raise An Alarm',
            'Turn on AC',
            'Turn on car'
          ],
          _id: '5f4f9324d51211002793a97b',
          deviceType: 'MedicalDevice',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f4f9324d51211002793a97c',
              name: 'SPO2',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f4f9324d51211002793a97d',
              name: 'PR',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-02T12:42:12.583Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        },
        {
          permissions: {
            read: [],
            write: [],
            control: []
          },
          actions: [
            'Monitoring',
            'Turn on AC'
          ],
          _id: '5f5078a3d51211002793a97f',
          deviceType: 'TiSesnorTag',
          attributes: [
            {
              accId: [
                'AWS101'
              ],
              _id: '5f5078a3d51211002793a980',
              name: 'temperature',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'Azure201'
              ],
              _id: '5f5078a3d51211002793a981',
              name: 'humidity',
              dataType: 'NUMBER',
              securitySetting: 0
            },
            {
              accId: [
                'GCP301'
              ],
              _id: '5f5078a3d51211002793a982',
              name: 'luminosity',
              dataType: 'NUMBER',
              securitySetting: 0
            }
          ],
          owner: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-03T05:01:23.981Z',
          __v: 0,
          totalDevices: 100,
          status: {
            active: 50,
            inactive: 30,
            faulty: 20,
            warning: {
              totalDevices: 26,
              devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            }
          }
        }
      ],
      count: 20
    }
  }
 
  

  getDevicesTypeCount(){
    return this.devicesTypeData.data.count;
  }

  getDevicesTypeData(start,end){
    return this.devicesTypeData.data.types.slice(start,end);
  }

  getAllDevicesTypeName(){
    return this.devicesTypeData.data.types.map((deviceType)=>deviceType.deviceType);
  }
  constructor() { }
}
