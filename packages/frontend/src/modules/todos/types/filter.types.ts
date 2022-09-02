export interface IFilter {
  query: string;
  isPublic: boolean;
  isComplited: boolean;
  page?: number;
  limit?: number;
}
