import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {MatStep} from '@angular/material/stepper';
import {devicesGenerator} from '../../../shared/datagenerator/datagenerator.dev';
import {Device} from '../../../shared/models/data-table.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomFormHostDirective} from '../custom-form-host.directive';
import {MatSelect} from '@angular/material/select';
import {CustomForm} from '../forms/custom-form.interface';
import {WidgetComponentSelection, WidgetSelection} from '../dashboard-widget.model';
import {Dashboard, Widget} from '../dashboard-types.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard-add-widget',
  templateUrl: './dashboard-add-widget.component.html',
  styleUrls: ['./dashboard-add-widget.component.scss']
})
export class DashboardAddWidgetComponent implements OnInit, AfterViewInit {
  selectWidgetForm: FormGroup;
  attributesForm: FormGroup;
  selectedIndex = 0;
  widgets: WidgetSelection[];
  @ViewChild('widget', {static: true}) widgetStep: MatStep;
  devices: Device[] = devicesGenerator(10).data.devices;
  selectedDevice: Device;
  selectedDashboard: string;
  customForm: FormGroup;
  @ViewChild(CustomFormHostDirective) container: CustomFormHostDirective;
  @ViewChild('widgetSelector') matSelect: MatSelect;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private factoryResolver: ComponentFactoryResolver,
    private http: HttpClient
  ) {
  }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(val => {
      this.selectedDashboard = val.name;
    });
    this.selectWidgetForm = this.fb.group({
      label: ['', Validators.required],
      component: ['', Validators.required],
      lib: [],
    });
    this.attributesForm = this.fb.group({
      deviceType: ['', Validators.required],
      deviceName: ['', Validators.required],
      attributes: ['', Validators.required],
      dataUnit: ['', Validators.required],
    });
    this.http.get<WidgetSelection[]>('assets/widgets.json').subscribe(val => this.widgets = val);
  }

  selectionChange($event: StepperSelectionEvent) {
    this.selectedIndex = $event.selectedIndex;
    if ($event.selectedIndex === 0) {
      this.selectWidgetForm.enable();
    } else {
      this.selectWidgetForm.disable();
      this.widgetStep.editable = false;
    }

  }

  submit() {
    const newWidget: Widget = {
      ...this.selectWidgetForm.value,
      data: {
        ...this.attributesForm.value,
        ...this.customForm.value,
        deviceId: this.selectedDevice._id
      }
    };
    const localDash = JSON.parse(localStorage.getItem('dashboard')) as Dashboard;
    if (localDash) {
      localDash.widgets.push(newWidget);
      console.log({localDash});
      localStorage.setItem('dashboard', JSON.stringify(localDash));
    } else {
      const newDashBoard: Dashboard = {
        dashboardName: this.selectedDashboard,
        widgets: [newWidget]
      };
      console.log('New Dashboard Stored', {newDashBoard});
      localStorage.setItem('dashboard', JSON.stringify(newDashBoard));
    }
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    });
    // localStorage.setItem('newItem', JSON.stringify(data));
    // console.log(data);
  }

  selectComponent(d: any) {
    this.selectWidgetForm.get('component').setValue(d);
  }

  deviceChange(type: Device) {
    this.selectedDevice = type;
  }

  ngAfterViewInit(): void {
    console.log(this.container);
    // import('../forms/guage-form/guage-form.component').then(m => {
    //   const component = m[Object.keys(m)[0]];
    //   const factCompo = this.factoryResolver.resolveComponentFactory(component);
    //   const componentRef = this.container.viewContainerRef.createComponent(factCompo);
    //   this.customForm = componentRef.instance['form'] as FormGroup;
    // });
  }

  loadFormComponent(path: string) {
    import('../forms/' + path).then(m => {
      const componentClass = m[Object.keys(m).pop()];
      const factCompo = this.factoryResolver.resolveComponentFactory<CustomForm>(componentClass);
      this.container.viewContainerRef.clear();
      const componentRef = this.container.viewContainerRef.createComponent(factCompo);
      // componentRef.changeDetectorRef.detectChanges();
      this.customForm = componentRef.instance.form;
    });
  }

  menuSelected(item: WidgetSelection, lib?: WidgetComponentSelection) {
    if (lib) {
      console.log('Menu with Lib Selected config', {item, lib});
      this.selectWidgetForm.get('lib').setValue(lib);
    } else {
      console.log('Single Library config', {item});
      this.selectWidgetForm.get('lib').setValue(null);
    }
    this.matSelect.placeholder = item.label;
    this.selectWidgetForm.get('component').setValue(item.value);
    this.loadFormComponent(item.componentPath);
  }
}
