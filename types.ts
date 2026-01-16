
export interface CardDetails {
  name: string;
  jobTitle: string;
  companyName: string;
  phone: string;
  website: string;
  instagram: string;
  style: string;
  backgroundColor: string;
  primaryTextColor: string;
  accentColor: string;
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
