import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class AbstractHttpClient {

  protected abstract getHttpService(): HttpClient;

  protected abstract getOptions(): object;

  protected abstract getBaseUrl(): string;

  private createOptions(extraOptions: object | undefined): object {

    if(!extraOptions) {
      return this.getOptions();
    }

    let options = this.getOptions();
    if (extraOptions) {
      const newOptions = options;
      Object.keys(extraOptions).forEach(option => {
        if ('headers' === option) {

          // @ts-ignore
          newOptions[option] = {...extraOptions[option], ...options[option]};
          return;
        }
        // @ts-ignore
        newOptions[option] = extraOptions[option];
      });
      options = newOptions;
    }
    return options;
  }

  get<T = any>(url: string, options?: object): Observable<T> {
    return this.getHttpService().get<T>(this.getBaseUrl() + url, this.createOptions(options))
  }

  post<T = any>(url: string, data?: any, options?: object): Observable<T> {
    return this.getHttpService().post<T>(this.getBaseUrl() + url, data, this.createOptions(options));
  }

  put<T = any>(url: string, data?: any, options?: object): Observable<T> {
    return this.getHttpService().put<T>(this.getBaseUrl() + url, data, this.createOptions(options));
  }

  patch<T = any>(url: string, data?: any, options?: object): Observable<T> {
    return this.getHttpService().patch<T>(this.getBaseUrl() + url, data, this.createOptions(options));
  }

  delete<T = any>(url: string, options?: object): Observable<T> {
    return this.getHttpService().delete<T>(this.getBaseUrl() + url, this.createOptions(options));
  }
}
