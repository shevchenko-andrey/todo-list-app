// TODO: Put a real interfaces here
export type IBooleanString = 'true' | 'false' | undefined;

export interface ITodoParams {
  id?: string;
}

export interface ITodoQuery {
  q?: string;
  compleated?: IBooleanString;
  public?: IBooleanString;
}
