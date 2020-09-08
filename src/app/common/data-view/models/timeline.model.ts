import {Ota2} from "../../../featured-modules/ota-updates/ota.model";

export interface TimelineItem {
  color?: string;
  heading: string;
  subheading: string;
  description?: string;
  date: number;
}

export interface DataViewConfig {
  [deviceType: string]: Ota2[]
}
