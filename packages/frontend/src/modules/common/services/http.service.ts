import { Axios, AxiosResponse } from 'axios';

class HttpService<D> {
  constructor(
    private fetchingService: Axios,
    private baseUrl: string,
    private apiVersion: string,
    private endpoint: string
  ) {}

  private getFullApiUrl(path = '') {
    return `${this.baseUrl}/${this.apiVersion}/${this.endpoint}/${path}`;
  }

  public async get() {
    const { data } = await this.fetchingService.get<null, AxiosResponse<D>>(this.getFullApiUrl());
    return data;
  }

  public async getByID(id: string) {
    const { data } = await this.fetchingService.get<D, AxiosResponse<D>>(this.getFullApiUrl(id));
    return data;
  }

  public async put<T>(id: string, body: T) {
    const { data } = await this.fetchingService.put<D, AxiosResponse<D>>(
      this.getFullApiUrl(id),
      body
    );
    return data;
  }

  public async post<T>(body: T) {
    const { data } = await this.fetchingService.post<D, AxiosResponse<D>>(
      this.getFullApiUrl(),
      body
    );
    return data;
  }

  public async delete(id: string) {
    const { data } = await this.fetchingService.delete<D, AxiosResponse<D>>(this.getFullApiUrl(id));
    return data;
  }
}

export default HttpService;
