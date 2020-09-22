import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DevicesGroupService} from '../../../core/services/devices-group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit, OnDestroy{
  groupData:any;
  routeParamsSubscription:any;

  constructor(private route: ActivatedRoute, private __devicesGroup: DevicesGroupService) { }

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params.subscribe(params=>{
      this.groupData = this.__devicesGroup.getDeviceGroupById(params.id);
    })
  }

  ngOnDestroy(){
    this.routeParamsSubscription.unsubscribe();
  }

}
