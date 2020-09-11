import {Injectable} from '@angular/core';
import {devicesGenerator, generateKeys} from "../../shared/datagenerator/datagenerator.dev";

@Injectable({
  providedIn: 'root'
})
export class GenerateKeysService {
  deviceTypes: string[];

  constructor() {
    this.deviceTypes = devicesGenerator(20).data.devices.map(d => d.type.deviceType)
  }

  getDeviceTypes() {
    return this.deviceTypes;
  }

  generateKeys(deviceType: string, count: number) {
    return generateKeys(deviceType, count);
  }
}
