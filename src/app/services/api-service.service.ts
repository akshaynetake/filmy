import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders,HttpUrlEncodingCodec, HttpEventType } from "@angular/common/http";
import { map } from  'rxjs/operators';
import 'rxjs/Rx';
import { AuthenticationService } from './authentication';
import { CustomURLEncoder } from './url_encode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // public APIURL = 'https://159.65.155.81:4010/api'
  public APIURL = 'https://localhost:4010/api'
  // public assetURL = 'http://159.65.155.81:4010/assets'
  constructor() { }
}
