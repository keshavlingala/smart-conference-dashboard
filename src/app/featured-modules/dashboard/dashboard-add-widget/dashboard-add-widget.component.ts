import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {MatStep} from '@angular/material/stepper';
import {devicesGenerator} from '../../../shared/datagenerator/datagenerator.dev';
import {Device} from '../../../shared/models/data-table.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard-add-widget',
  templateUrl: './dashboard-add-widget.component.html',
  styleUrls: ['./dashboard-add-widget.component.scss']
})
export class DashboardAddWidgetComponent implements OnInit {
  selectWidgetForm: FormGroup;
  attributesForm: FormGroup;
  selectedIndex = 0;
  widgets: { label: string, value: string }[] = [
    {label: 'Gauge Chart', value: 'gauge'},
    {label: 'Line Chart', value: 'line'},
    {label: 'Bar Chart', value: 'bar'},
    {label: 'StackedBar Chart', value: 'stackedbar'},
    {label: 'Smart Light', value: 'smartlight'},
  ];
  @ViewChild('widget') widgetStep: MatStep;
  devices: Device[] = devicesGenerator(10).data.devices;
  selectedDevice: Device;
  selectedDashboard;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(val => {
      this.selectedDashboard = val.name;
    });
    this.selectWidgetForm = this.fb.group({
      label: ['', Validators.required],
      component: ['', Validators.required]
    });
    this.attributesForm = this.fb.group({
      deviceType: ['', Validators.required],
      deviceName: ['', Validators.required],
      attributes: ['', Validators.required],
      dataUnit: ['', Validators.required],
      min: null,
      max: null
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
    const data = {
      ...this.selectWidgetForm.value,
      ...this.attributesForm.value,
      deviceId: this.selectedDevice._id
    };
    console.log(data);
  }

  selectComponent(d: { label: string; value: string }) {
    this.selectWidgetForm.get('component').setValue(d.value);
  }

  deviceChange(type: Device) {
    this.selectedDevice = type;
  }
}
