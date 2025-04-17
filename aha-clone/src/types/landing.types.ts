export interface ILandingModule {
    moduleType: any;
    moduleCode: string;
    moduleTitle: string;
    content: any[]; // Replace 'any' with specific content type when known
  }
  
  export interface ILandingData {
    data(data: any): unknown;
    modules: ILandingModule[];
  }
  