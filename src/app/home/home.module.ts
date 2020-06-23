import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {PostComponentComponent} from "../components/post-component/post-component.component";
import {SliderComponent} from "../components/slider/slider.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    exports: [
        PostComponentComponent
    ],
    declarations: [HomePage, PostComponentComponent, SliderComponent]
})
export class HomePageModule {}
