export interface Rule {
  name: string;
  condition: string;
  action: { name: string, icon: string };
  createdDate: string;
}


export interface RuleDevice {
  id: string;
  name: string;
  rules: Rule[];
}
