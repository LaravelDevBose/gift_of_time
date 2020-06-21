import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../providers/config.service";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {NewPostPage} from "../new-post/new-post.page";

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

    public selectedTab = 'home';
    constructor(
        public config: ConfigService,
        private router: Router,
        private modal: ModalController
    ) {}

    ngOnInit() {
        this.config.selectedTabSub.subscribe(routeName =>{
            this.selectedTab = routeName;
        })
    }

    async openPostModal() {
        const postModal = await this.modal.create({
            component: NewPostPage,
        });
        return await postModal.present();
    }

    goTo(routeName: string) {
        this.config.selectedTabSub.next(routeName);
        this.router.navigate([routeName])

    }
}
