import {Injectable} from '@angular/core';
import {Rule, RuleCard} from './rules.models';
import {groupIDGenerator, ruleDeviceGenerator} from '../../shared/datagenerator/datagenerator.dev';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rules: Rule[] = [];
  ruleCards: RuleCard[];
  groupIDs: string[];

  constructor() {
    this.rules = ruleDeviceGenerator(200).data.rules;
    console.log(this.rules);
    const types: { [deviceType: string]: Rule[] } = {};
    this.rules.forEach(rule => {
      if (rule.type.deviceType in types) {
        types[rule.type.deviceType].push(rule);
      } else { types[rule.type.deviceType] = [rule]; }
    });
    this.ruleCards = Object.keys(types).map(deviceType => {
      return {
        deviceType,
        rules: types[deviceType]
      };
    });
    this.groupIDs = groupIDGenerator(10);
  }

  getRuleDevices(): RuleCard[] {
    return this.ruleCards;
  }

  getDevices(): any[] {
    console.log(this.rules);
    return this.rules.slice(0);
  }

  addRule(rule) {
    console.log('Add New Rule', rule);
  }

  getGroupIds() {
    return this.groupIDs;
  }
}
