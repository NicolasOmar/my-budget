interface Action {
  title: string;
  icon?: string;
  path?: Array<string>;
}

export interface Module {
  title: string;
  description: string;
  actions?: Array<Action>;
}
