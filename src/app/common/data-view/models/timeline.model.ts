export interface TimelineItem {
  color?: string;
  heading: string;
  subheading: string;
  description?: string;
  date: number;
}

export interface DataViewConfig {
  title: string;
  all_updates: Update[];
}

export interface Update {
  name: string;
  items: TimelineItem[];
}
