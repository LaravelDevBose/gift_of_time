import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.page.html',
    styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

    public friends =[];
    constructor() {
        for (let i=0; i<20; i++){
            this.friends.push(i);
        }
    }

    ngOnInit() {
    }

    loadData(event: any) {
        setTimeout(() => {
            console.log('Done');

            for (let i=0; i<20; i++){
                this.friends.push(i);
            }
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.friends.length == 100) {
                event.target.disabled = true;
            }
        }, 500);
    }

}
