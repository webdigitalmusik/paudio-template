export interface TransducerProduct {
  id: string;
  name: string;
  model: string;
  series: string;
  badge: string;
  category: 'sub' | 'mid' | 'hf' | 'horn' | 'recone';
  categoryLabel: string;
  size: string;
  powerAes: number;
  powerProgram: number;
  impedance: number;
  sensitivity: number;
  voiceCoil: string;
  voiceCoilDiameterMm: number;
  frequencyRange: string;
  magnetType: string;
  chassis: string;
  image: string;
  images?: string[];
  description: string;
  klippelVerified: boolean;
  thieleSmall: {
    fs: number; // Hz
    re: number; // Ohm
    qms: number;
    qes: number;
    qts: number;
    bl: number; // T-m
    mms: number; // g
    vas: number; // Liters
    sd: number; // cm2
    xmax: number; // mm
    ebp: number; // Fs / Qes
    efficiency: number; // %
  };
  boxRecommendations: {
    type: string;
    recommendedVb: string;
    recommendedFb: string;
    usageNote: string;
  };
}

export interface ApplicationGuide {
  id: string;
  title: string;
  icon: string;
  description: string;
  recommendation: string;
  detailedSpecs: string[];
  recommendedModelIds: string[];
}

export interface TechnicalArticle {
  id: string;
  slug: string;
  tag: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  thumbnail: string;
  heroImage: string;
  imageCaption?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  content: string[];
  keyTakeaways: string[];
  sections?: {
    heading: string;
    body: string[];
    callout?: {
      type: 'tip' | 'formula' | 'warning';
      title: string;
      text: string;
    };
  }[];
  relatedDriverIds?: string[];
}
