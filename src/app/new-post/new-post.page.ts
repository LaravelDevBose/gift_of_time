import {Component, OnInit} from '@angular/core';
import {GlobalDataService} from "../providers/global_data.service";

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.page.html',
    styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {
    customPopoverOptions: any = {
        header: 'Select Privacy',
        subHeader: 'Who can see your post ?',
        mode:'ios',
        interface:'popover'
    };
    constructor(
        public globalData: GlobalDataService,
    ) { }

    ngOnInit() {
    }
}
