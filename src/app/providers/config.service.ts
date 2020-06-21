import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public app_mode = 'md';
  public icon_mode='ios';
  public selectedTabSub = new Subject<string>()
  constructor() { }


}
