import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {MatStep} from '@angular/material/stepper';
import {devicesGenerator} from '../../../shared/datagenerator/datagenerator.dev';
import {Device} from '../../../shared/models/data-table.model';
import {ActivatedRoute} from '@angular/router';
import {CustomFormHostDirective} from '../custom-form-host.directive';
import {MatSelect} from '@angular/material/select';
import {CustomForm} from '../forms/custom-form.interface';
import {WidgetSelection} from '../dashboard-widget.model';

@Component({
  selector: 'app-dashboard-add-widget',
  templateUrl: './dashboard-add-widget.component.html',
  styleUrls: ['./dashboard-add-widget.component.scss']
})
export class DashboardAddWidgetComponent implements OnInit, AfterViewInit {
  selectWidgetForm: FormGroup;
  attributesForm: FormGroup;
  selectedIndex = 0;
  widgets: WidgetSelection[] = [
    {
      label: 'Gauge Chart', value: 'gauge', componentPath: 'guage-form/guage-form.component',
      lib: [
        'chartish'
      ]
    },
    {
      label: 'Line Chart', value: 'line', componentPath: 'line-form/line-form.component',
      lib: [
        'chartish',
        'chartjs',
      ]
    },
    {label: 'Bar Chart', value: 'bar', componentPath: 'guage-form/guage-form.component'},
    {label: 'StackedBar Chart', value: 'stackedbar', componentPath: 'guage-form/guage-form.component'},
    {label: 'Smart Light', value: 'smartlight', componentPath: 'guage-form/guage-form.component'},
  ];
  @ViewChild('widget', {static: true}) widgetStep: MatStep;
  devices: Device[] = devicesGenerator(10).data.devices;
  selectedDevice: Device;
  selectedDashboard;
  customForm: FormGroup;
  @ViewChild(CustomFormHostDirective) container: CustomFormHostDirective;
  @ViewChild('widgetSelector') matSelect: MatSelect;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private factoryResolver: ComponentFactoryResolver
  ) {
  }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(val => {
      this.selectedDashboard = val.name;
    });
    this.selectWidgetForm = this.fb.group({
      label: ['', Validators.required],
      component: ['', Validators.required],
      lib: []
    });
    this.attributesForm = this.fb.group({
      deviceType: ['', Validators.required],
      deviceName: ['', Validators.required],
      attributes: ['', Validators.required],
      dataUnit: ['', Validators.required],
    });
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
    console.log(this.customForm);
    const data = {
      ...this.selectWidgetForm.value,
      ...this.attributesForm.value,
      ...this.customForm.value,
      deviceId: this.selectedDevice._id
    };
    console.log(data);
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
      console.log(this.customForm);
    });
  }

  menuSelected(item: WidgetSelection, lib?: string) {
    if (lib) {
      console.log('Menu with Lib Selected config', {item, lib});
      this.selectWidgetForm.get('lib').setValue(lib);
    } else {
      console.log('Single Library config', {item});
    }
    this.matSelect.placeholder = item.label;
    this.selectWidgetForm.get('component').setValue(item.value);
    this.loadFormComponent(item.componentPath);
  }
}
