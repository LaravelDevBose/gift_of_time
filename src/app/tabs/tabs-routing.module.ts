import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {HomePage} from "../home/home.page";

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
            },
            {
                path: 'notification',
                loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule)
            },
            {
                path: 'friends',
                loadChildren: () => import('../friends/friends.module').then( m => m.FriendsPageModule)
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
