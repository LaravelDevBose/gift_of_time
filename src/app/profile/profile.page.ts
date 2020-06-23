import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../providers/config.service";
import {NewPostPage} from "../new-post/new-post.page";
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    constructor(
        public config: ConfigService,
        private modalCtrl: ModalController

    ) { }

    ngOnInit() {
    }

    async openPostModal() {
        const postModal = await this.modalCtrl.create({
            component: NewPostPage,
        });
        return await postModal.present();
    }
}
