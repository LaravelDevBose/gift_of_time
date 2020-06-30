import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../providers/config.service";
import {GlobalDataService} from "../../providers/global_data.service";

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {

  constructor(
      public config: ConfigService,
      public globalData: GlobalDataService,
  ) { }

  ngOnInit() {
  }

}
