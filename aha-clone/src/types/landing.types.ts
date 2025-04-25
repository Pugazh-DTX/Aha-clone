import { Tab } from "./ahaTypes";

// For individual resource inside a container
export interface IResource {
  id: string;
  bgImage: string;
  lon: {
    en?: string;
    ta?: string;
  };
  tag?: string;
  rating?: number;
  // Add more fields as per API if needed
}

// Represents each container
export interface ILandingContainer {
  id: string;
  title: string;
  type: string;
  resources?: IResource[];
  metadata?: Record<string, any>;
  // Add other fields if needed
}

export interface IPagination {
  start: number;
  count: number;
  total: number;  // or whatever field your API returns that gives the total number of records
}


// Represents the main landing data object
export interface ILandingData {
  tabs:[];  // Ensure it's an array of `Tab`
  data:[];  // Or whatever the appropriate type is for your data // Update accordingly
  containers?: any[];
  modules: ILandingModule[];
  pageNumber: number;
  totalPages: number;
  pagination: IPagination;
  
}

// Represents each module (keep this or enhance if you get more info)
export interface ILandingModule {
  moduleType: any;
  moduleCode: string;
  moduleTitle: string;
  content: any[]; // Replace when you know the structure
}
