import {Injectable} from '@angular/core';
import {Rule, RuleDevice} from "./rules.models";
import {ruleDeviceGenerator} from "../../shared/datagenerator/datagenerator.dev";

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rules: RuleDevice[] = [];

  constructor() {
    this.rules = ruleDeviceGenerator(52)
  }

  getRuleDevices(): RuleDevice[] {
    return this.rules.slice(0);
  }

  getDevices(): any[] {
    console.log(this.rules);
    return this.rules.slice(0);
  }

  addRule(rule: Rule,id:string) {
    this.rules.find((d)=>d.id===id).rules.push(rule);
  }
}
