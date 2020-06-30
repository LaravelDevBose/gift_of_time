import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.page.html',
    styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
    public notifyCount =[];
    constructor() {
        for (let i=0; i<20; i++){
            this.notifyCount.push(i);
        }
    }

    ngOnInit() {
    }

    loadData(event: any) {
        setTimeout(() => {
            console.log('Done');

            for (let i=0; i<20; i++){
                this.notifyCount.push(i);
            }
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.notifyCount.length == 100) {
                event.target.disabled = true;
            }
        }, 500);
    }
}
