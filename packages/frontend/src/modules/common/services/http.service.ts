import { Axios, AxiosResponse } from 'axios';
import localStorageService from './local-storage.service';

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

  private getHeaders() {
    return {
      headers: {
        Authorization: localStorageService.getToken() ?? ''
      }
    };
  }

  public async get<R = D>(params = '') {
    const { data } = await this.fetchingService.get<null, AxiosResponse<R>>(
      this.getFullApiUrl(params),
      this.getHeaders()
    );
    return data;
  }

  public async getById(id: string) {
    const { data } = await this.fetchingService.get<D, AxiosResponse<D>>(
      this.getFullApiUrl(id),
      this.getHeaders()
    );
    return data;
  }

  public async put<T>(id: string, body: T) {
    const { data } = await this.fetchingService.put<D, AxiosResponse<D>>(
      this.getFullApiUrl(id),
      body,
      this.getHeaders()
    );
    return data;
  }

  public async post<T, R>(body: T, path = '') {
    const { data } = await this.fetchingService.post<D, AxiosResponse<R>>(
      this.getFullApiUrl(path),
      body,
      this.getHeaders()
    );
    return data;
  }

  public async delete(id: string) {
    const { data } = await this.fetchingService.delete<D, AxiosResponse<D>>(
      this.getFullApiUrl(id),
      this.getHeaders()
    );
    return data;
  }
}

export default HttpService;
