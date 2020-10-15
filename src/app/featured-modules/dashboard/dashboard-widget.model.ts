export interface WidgetSelection {
  label: string;
  value: string;
  componentPath: string;
  lib?: WidgetLib[];
}

export interface WidgetLib {
  label: string;
  value: string;
  componentPath: string;
}
