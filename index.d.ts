export interface TechMilestone {
  title: string;
  date: string;
  summary: string;
  url: string;
  image: string;
  source: string;
  license: string;
}

export interface FetchOptions {
  date?: string;
}

export declare function getTodayInTech(options?: FetchOptions): Promise<TechMilestone>;
export default getTodayInTech;
