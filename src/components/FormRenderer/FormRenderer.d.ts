import { Component } from 'vue';

export type Option =
  | SchemaSelectOption
  | SchemaRadioOption
  | SchemaCheckboxListOption
  | SchemaSeparatorOption
  | SchemaSubformOption
  | LayoutHorizontal
  | SchemaStaticOption
  | SchemaDescriptionOption
  | SchemaInputListOption
  | SchemaDraggableOption
  | SchemaDateOption
  | SchemaSliderOption
  | SchemaNumberOption
  | SchemaTextOption
  | SchemaTextareaOption
  | SchemaCheckboxOption
  | SchemaSwitchOption
  | SchemaCustomComponent
  | SchemaButtonOption;

interface BaseOption {
  type: string;
  attributes?: Record<string, unknown>;
}
export interface SchemaSeparatorOption extends BaseOption {
  title?: string;
  type: 'separator';
}

export interface SchemaDescriptionOption extends BaseOption {
  type: 'description';
  content: string;
  attributes?: Record<string, unknown>;
}

export interface SchemaButtonOption extends BaseOption {
  title: string;
  type: 'button';
  click: () => void;
  attributes?: Record<string, unknown>;
}

export interface SchemaStaticOption extends BaseOption {
  item: string;
  type: 'static';
  default?: string | boolean | number | Record<string, unknown>;
}

export interface SchemaDraggableOption extends BaseOption {
  title?: string;
  item: string;
  type: 'draggable';
  options: Array<SchemaSelectOptionOption>;
  default?: Array<string | number | boolean>;
}

export interface SchemaCustomComponent extends BaseOption {
  title?: string;
  item: string;
  type: 'custom';
  component: Component;
  props?: Record<string, unknown>;
}

export interface SchemaDateOption extends BaseOption {
  title?: string;
  item: string;
  prefix?: string;
  suffix?: string;
  type: 'date';
  default?: any;
}

export interface SchemaNumberOption extends BaseOption {
  title?: string;
  item: string;
  prefix?: string;
  suffix?: string;
  type: 'number';
  default?: any;
}

export interface SchemaTextOption extends BaseOption {
  title?: string;
  item: string;
  prefix?: string;
  suffix?: string;
  type: 'text';
  default?: any;
}

export interface SchemaTextareaOption extends BaseOption {
  title?: string;
  item: string;
  prefix?: string;
  suffix?: string;
  type: 'textarea';
  default?: any;
}

export interface SchemaSelectOptionOption {
  title: string | number;
  description?: string;
  value: any;
}

export interface SchemaSelectOption extends BaseOption {
  type: 'select';
  title?: string;
  item: string;
  prefix?: string;
  suffix?: string;
  default?: any;
  options: Array<SchemaSelectOptionOption>;
}

export interface SchemaRadioOptionOption {
  title: string | number;
  value: string | number | boolean;
}
export interface SchemaRadioOption extends BaseOption {
  type: 'radio';
  title?: string;
  item: string;
  label?: string;
  prefix?: string;
  suffix?: string;
  default?: string | number | boolean;
  options: Array<SchemaRadioOptionOption>;
}
export interface SchemaSliderOption extends BaseOption {
  title?: string;
  item: string;
  type: 'slider';
  prefix?: string;
  suffix?: string;
  default?: number | Array<number>;
}

export interface SchemaCheckboxListOptionOption {
  title: string | number;
  value: string | number | boolean;
}
export interface SchemaCheckboxListOption extends BaseOption {
  type: 'checkboxes';
  title?: string;
  item: string;
  label?: string;
  default?: Array<string | number | boolean>;
  options: Array<SchemaCheckboxListOptionOption>;
}

export interface SchemaCheckboxOption extends BaseOption {
  title?: string;
  item: string;
  label?: string;
  type: 'checkbox';
  default?: string | number | boolean;
}

export interface SchemaSwitchOption extends BaseOption {
  title?: string;
  item: string;
  label?: string;
  type: 'switch';
  default?: string | number | boolean;
}

export interface SchemaInputListOption extends BaseOption {
  title?: string;
  item: string;
  type: 'input_array';
  default?: Array<string | number | boolean>;
}

export interface SchemaSubformOption extends BaseOption {
  item: string;
  type: 'subform';
  dependency: string;
  options: Array<{
    title?: string;
    identifier: string | number | boolean;
    options: Option[];
  }>;
}

export interface LayoutHorizontal extends BaseOption {
  type: 'layout_horizontal';
  attributes: {
    columns: number;
  };
  options: Array<Option>;
}
