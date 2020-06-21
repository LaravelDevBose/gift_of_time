import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from "../../providers/config.service";
import {IonSearchbar} from "@ionic/angular";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchBar') searchbar : any;
  constructor(
      public config: ConfigService
  ) {

  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.searchbar.setFocus();
  }
}
