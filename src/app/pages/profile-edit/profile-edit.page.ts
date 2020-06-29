import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GlobalDataService} from "../../providers/global_data.service";

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.page.html',
    styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
    @ViewChild('fileInputRef', {static: false}) filePickerRef: ElementRef<HTMLInputElement>;
    public customAlertOptions: any = {
        header: 'Relationship Status',
        translucent: true,
        mode: 'ios',
    };

    public selectedRelationship = 'in_relationship';
    public selectedGender = '1';

    constructor(
        public globalData: GlobalDataService,
    ) {
    }

    ngOnInit() {
    }


    openFilePicker() {
        this.filePickerRef.nativeElement.click();
        return;
    }

    onFileChoose(event: Event) {
        const pickedFile = (event.target as HTMLInputElement).files[0];
    }
}
