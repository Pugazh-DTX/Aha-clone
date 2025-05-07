// Resource inside a container
export interface IResource {
  id: string;
  bgImage: string;
  lon: {
    en?: string;
    ta?: string;
  };
  tag?: string;
  rating?: number;
}

// Individual container
export interface ILandingContainer {
  id: string;
  title: string;
  type: string;
  resources?: IResource[];
  metadata?: Record<string, any>;
}

// Pagination details
export interface IPagination {
  start: number;
  count: number;
  total: number;
}

// Tab information
export interface ILandingTab {
  id: string;
  name: string;
}

// Module structure
export interface ILandingModule {
  moduleType: string;
  moduleCode: string;
  moduleTitle: string;
  id: any; 
  content: ILandingContainer[];
}

// Main landing response
export interface ILandingData {
  tabs: ILandingTab[];
  data: ILandingModule[];
  store_front_id: string;
  containers?: ILandingContainer[];
  modules: ILandingModule[];
  pageNumber: number;
  totalPages: number;
  pagination: IPagination;
}
