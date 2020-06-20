import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public app_mode = 'md';
  public icon_mode='ios';
  constructor() { }
}
