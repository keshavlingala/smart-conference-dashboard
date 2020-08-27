import { DataViewConfig } from './../../../common/data-view/models/timeline.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ota-timeline',
  templateUrl: './ota-timeline.component.html',
  styleUrls: ['./ota-timeline.component.css']
})
export class OtaTimelineComponent implements OnInit {
  dataViewConfig: DataViewConfig= {
    title: 'OTA Updates',
    all_updates: [
      {
        name: 'Factory Default', items: [
          {
            heading: 'Ambient Sensing',
            subheading: 'V1.0',
            date: 1596737476953,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt erat, et dapibus tortor. Duis nec nulla quis massa semper faucibus ac at sapien. Donec libero urna, consectetur et consequat quis, pharetra vel leo. Suspendisse non faucibus nunc. Curabitur gravida viverra auctor. Phasellus malesuada sollicitudin diam,'
          },
          {
            heading: 'Ambient Sensing',
            subheading: 'V1.0',
            date: 1596737476953,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt erat, et dapibus tortor. Duis nec nulla quis massa semper faucibus ac at sapien. Donec libero urna, consectetur et consequat quis, pharetra vel leo. Suspendisse non faucibus nunc. Curabitur gravida viverra auctor. Phasellus malesuada sollicitudin diam,'
          },
          {
            heading: 'Ambient Sensing',
            subheading: 'V1.0',
            date: 1596737476953,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt erat, et dapibus tortor. Duis nec nulla quis massa semper faucibus ac at sapien. Donec libero urna, consectetur et consequat quis, pharetra vel leo. Suspendisse non faucibus nunc. Curabitur gravida viverra auctor. Phasellus malesuada sollicitudin diam,'
          },
          {
            heading: 'Ambient Sensing',
            subheading: 'V1.0',
            date: 1596737476953,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt erat, et dapibus tortor. Duis nec nulla quis massa semper faucibus ac at sapien. Donec libero urna, consectetur et consequat quis, pharetra vel leo. Suspendisse non faucibus nunc. Curabitur gravida viverra auctor. Phasellus malesuada sollicitudin diam,'
          },
          {
            heading: 'Ambient Sensing',
            subheading: 'V1.0',
            date: 1596737476953,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt erat, et dapibus tortor. Duis nec nulla quis massa semper faucibus ac at sapien. Donec libero urna, consectetur et consequat quis, pharetra vel leo. Suspendisse non faucibus nunc. Curabitur gravida viverra auctor. Phasellus malesuada sollicitudin diam,'
          },
          {
            heading: 'Ambient Sensing',
            subheading: 'V1.0',
            date: 1596737476953,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt erat, et dapibus tortor. Duis nec nulla quis massa semper faucibus ac at sapien. Donec libero urna, consectetur et consequat quis, pharetra vel leo. Suspendisse non faucibus nunc. Curabitur gravida viverra auctor. Phasellus malesuada sollicitudin diam,'
          },
        ]
      },
      {
        name: 'This', items: [
          {
            heading: 'Ambient Sensing',
            subheading: 'V1.0',
            date: 1596737476953,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt erat, et dapibus tortor. Duis nec nulla quis massa semper faucibus ac at sapien. Donec libero urna, consectetur et consequat quis, pharetra vel leo. Suspendisse non faucibus nunc. Curabitur gravida viverra auctor. Phasellus malesuada sollicitudin diam,'
          },
          {
            heading: 'Ambient Sensing',
            subheading: 'V1.0',
            date: 1596737476953,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt erat, et dapibus tortor. Duis nec nulla quis massa semper faucibus ac at sapien. Donec libero urna, consectetur et consequat quis, pharetra vel leo. Suspendisse non faucibus nunc. Curabitur gravida viverra auctor. Phasellus malesuada sollicitudin diam,'
          },
        ]
      },
      {name: 'That', items: []},
      {name: 'The Other One', items: []}
    ]
  };

  add($event: string): void {
    console.log($event);
  }

  ngOnInit(): void {
  }
}
