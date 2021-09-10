import {Injectable} from "@angular/core";
import {AbstractHttpClient} from "./abstract.http.client";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "angular-web-storage";

@Injectable({
  providedIn: 'root'
})
export class ApiHttpClient extends AbstractHttpClient {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly localStorage: LocalStorageService
  ) {
    super();
  }

  protected getBaseUrl(): string {
    return "/api";
  }

  protected getHttpService(): HttpClient {
    return this.httpClient;
  }

  protected getOptions(): object {
    console.log(`Bearer token is ${this.localStorage.get('session').token}`);
    return {
      headers: {
        Authorization: `Bearer ${this.localStorage.get('session').token}`
      }
    };
  }

}
