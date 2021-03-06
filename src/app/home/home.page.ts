import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../providers/config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
      public config: ConfigService
  ) { }

  ngOnInit() {
  }

}
