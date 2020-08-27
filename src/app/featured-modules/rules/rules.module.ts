import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RulesRoutingModule} from "./rules-routing.module";
import {RuleHomeComponent} from './rule-home/rule-home.component';
import {RuleListComponent} from "./rule-list/rule-list.component";
import {AddRuleComponent} from "./add-rule/add-rule.component";
import {AngularMaterialModule} from "../../shared/angular-material/angular-material.module";
import {RulesService} from "./rule-service.service";
import {RulePopupComponent} from "./rule-popup.component";
import {DataViewModule} from "../../common/data-view/data-view.module";


@NgModule({
  declarations: [RuleHomeComponent, RuleListComponent, AddRuleComponent, RulePopupComponent],
  imports: [
    CommonModule,
    RulesRoutingModule,
    AngularMaterialModule,
    DataViewModule
  ],
  entryComponents: [RulePopupComponent],
  providers: [RulesService]
})
export class RulesModule {
}
