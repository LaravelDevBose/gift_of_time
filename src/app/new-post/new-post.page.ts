import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.page.html',
    styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {

    constructor(
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
}
