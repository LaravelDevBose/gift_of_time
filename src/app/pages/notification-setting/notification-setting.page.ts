import {Component, OnInit} from '@angular/core';
import {IonSelect} from "@ionic/angular";
import {ConfigService} from "../../providers/config.service";
import {GlobalDataService} from "../../providers/global_data.service";

@Component({
    selector: 'app-notification-setting',
    templateUrl: './notification-setting.page.html',
    styleUrls: ['./notification-setting.page.scss'],
})
export class NotificationSettingPage implements OnInit {

    customPopoverOptions: any = {
        subHeader: 'where you receive these notification',
        mode:'ios',
    };
    constructor(
        public config: ConfigService,
        public globalData: GlobalDataService,
    ) {
    }

    ngOnInit() {
    }

    openPopOver(selectHref: IonSelect) {
        setTimeout(() => {
            selectHref.open();
        }, 700)

    }
}
