import {Injectable} from '@angular/core';
import {Rule, RuleCard} from "./rules.models";
import {ruleDeviceGenerator} from "../../shared/datagenerator/datagenerator.dev";

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rules: Rule[] = [];
  ruleCards: RuleCard[];

  constructor() {
    this.rules = ruleDeviceGenerator(52).data.rules
    let types: { [deviceType: string]: Rule[] } = {};
    this.rules.forEach(rule => {
      if (rule.type.deviceType in types) {
        types[rule.type.deviceType].push(rule);
      } else types[rule.type.deviceType] = [rule];
    })
    this.ruleCards = Object.keys(types).map(deviceType => {
      return {
        deviceType,
        rules: types[deviceType]
      }
    })
  }

  getRuleDevices(): RuleCard[] {
    return this.ruleCards
  }

  getDevices(): any[] {
    console.log(this.rules);
    return this.rules.slice(0);
  }

  addRule(rule) {
    console.log('Add New Rule', rule)
  }
}
