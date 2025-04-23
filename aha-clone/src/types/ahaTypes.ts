export interface LocalizedText {
    en: string;
    ta: string;
    [key: string]: string;
  }

  
  
  export interface LocalizedTextItem {
    lang: string;
    n: string;
  }
  
  export interface ImageUrls {
    poster?: string;
    banner?: string;
    thumbnail?: string;
    carouselthumbnail?: string;
    autoPreviewUrl?: string;
    autoPreview?: string;
    logo?: string;

  }

  export interface AspectRatio {
    _1x1: string;
    _3x1: string;
    _2x3: string;
    _16x9: string;
    _7x2: string;
    _16x18: string;
    _9x16: string;
  }

  
  

  export interface Resource {
    releaseDate: any;
    bgImage: any;
    thumbnail: any;
    carouselthumbnail: any;
    posterUrl: any;
    autoPreviewUrl: string;
    year: any;
    is_adult_content: boolean;
    ispremium: any;
    length: any;
    genre: any;
    LocalDescription: any;
    LocalizedKeywords: any; 
    LocalizedCast: any;
    LocalizedCrew: any;
    LocalizedDirector: any;
    description: any;
    id: string;
    type: 'movie' | 'webseries' | 'other';
    title: any;
    images: ImageUrls;
    metadata: {
      description: any;
      year: number;
      releaseDate: string;
      length: string;
      genre: any;
      productionHouse: any;
      audioQuality: string;
      videoQuality: string;
      hasAds: boolean;
      advisories: string[];
      skipMarkers?: {
        intro?: { start: number; end: number };
        credits?: { start: number; end: number };
      };
    };
    

    availability: {
      startDate: string;
      endDate: string;
      isPublished: boolean;
    };
    actions: {
      clickAction: string;
    };
    urn: string;
    [key: string]: any; // Allow for additional properties
  }
  
  export interface Container {
    bgImage: string;
    name: string;
    title: string;
    carouseltitle?: string;
    id: string;
    layoutType: string;
    ratio: string;
    deviceType: string;
    premiumlogo: any;
    font_style: string;
    scrollStyle: {
      autoPlay: boolean;
      direction: 'lefttoright' | 'righttoleft';
      loop: boolean;
    };
    resources: Resource[];
  }
  
  export interface Tab {
    id: string;
    title: LocalizedText;
    containers: Container[];
    pagination?: {
      start: number;
      rows: number;
      count: number;
    };
  }
  