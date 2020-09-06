import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StepperSelectionEvent} from "@angular/cdk/stepper";
import {MatStep, MatStepper} from "@angular/material/stepper";
import {RulesService} from "../rule-service.service";
import {Rule} from "../rules.models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.scss']
})
export class AddRuleComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedIndex = 0;
  @ViewChild('ruleName') ruleStep: MatStep;
  @ViewChild('stepper') stepper: MatStepper;
  parameters = ['Humidity', 'Lights On', 'Luminosity', 'Occupancy', 'Projector On', 'Temperature']
  actions = ['Start Meeting', 'End Meeting', 'Focus On', 'Turn on AC']

  constructor(
    private _formBuilder: FormBuilder,
    public rulesService: RulesService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      action: ['', Validators.required],
      condition: ['', Validators.required]
    });
  }

  log(event?) {
    console.log(event)
    console.log(this.selectedIndex)
    console.log(this.firstFormGroup)
  }

  selectionChange($event: StepperSelectionEvent) {
    this.selectedIndex = $event.selectedIndex;
    if ($event.selectedIndex === 0) {
      this.firstFormGroup.enable()
    } else {
      this.firstFormGroup.disable()
    }
  }

  async submit() {
    // console.log(this.firstFormGroup.value, this.secondFormGroup.value);
    // const {name, type} = this.firstFormGroup.value;
    // const {action, condition} = this.secondFormGroup.value;
    // const rule: Rule = {
    //   name,
    //   action: {name: action, icon: 'ac_unit'},
    //   condition,
    //   createdDate: new Date().toDateString()
    // }
    // await this.router.navigate(['/rules'])
    // console.log('Rule Created', rule);
    // this.rulesService.addRule(rule, type);
    // this.firstFormGroup.reset();
    // this.secondFormGroup.reset();

  }
}
