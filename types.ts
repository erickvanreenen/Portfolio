
export interface CaseStudy {
  id: string;
  title: string;
  focus: string;
  highlight: string;
  situation: string;
  task: string;
  result: string;
  image: string;
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}
