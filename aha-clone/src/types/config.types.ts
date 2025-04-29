export interface ConfigDataType {
  language: string;
  region: string;
  layout?: any;
  carousel?: any[];
  themes?: {
    [key: string]: any;
  };
  [key: string]: any;
}
