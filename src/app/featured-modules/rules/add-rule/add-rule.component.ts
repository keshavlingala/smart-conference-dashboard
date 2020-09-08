import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StepperSelectionEvent} from "@angular/cdk/stepper";
import {MatStep, MatStepper} from "@angular/material/stepper";
import {RulesService} from "../rule-service.service";
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
  notValid: boolean = false;

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


  selectionChange($event: StepperSelectionEvent) {
    this.selectedIndex = $event.selectedIndex;
    if ($event.selectedIndex === 0) {
      this.firstFormGroup.enable()
    } else {
      this.firstFormGroup.disable()
      this.notValid = false;
    }
  }

  async submit() {
    if (!this.secondFormGroup.valid) {
      this.notValid = true;
      return
    }
    this.notValid = false;
    const {name, type} = this.firstFormGroup.value;
    const {action, condition} = this.secondFormGroup.value;
    const rule = {
      ruleName: name,
      actions: [action],
      condition,
      groupIds: [],
      deviceType: type
    }
    this.rulesService.addRule(rule)
    // await this.router.navigate(['/rules'])
    this.stepper.reset();
    this.secondFormGroup.reset();
    this.firstFormGroup.enable();
    this.firstFormGroup.reset();

  }
}
