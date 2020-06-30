import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GlobalDataService {

    public relationshipList = [
        {
            key: 'single',
            label: 'Single',
        },
        {
            key: 'in_relationship',
            label: 'In a RelationShip'
        },
        {
            key: 'engaged',
            label: 'Engaged',
        },
        {
            key: 'married',
            label: 'Married',
        },
        {
            key: 'separated',
            label: 'Separated'
        },
        {
            key: 'divorced',
            label: 'Divorced'
        },
        {
            key: 'widowed',
            label: 'widowed'
        }
    ];

    public userInfo = {
        firstname: 'Arup Kumer',
        lastname: 'Bose',
        username: 'arup_bose',
        email: 'arupkumerbose@gmail.com',
        name: 'Arup Kumer Bose',
        bio: 'Believe in yourself',
        birth_date: '1995-10-22',
        mobile: '01571721910',
        live_in: 'Sherpur Town, Sherpur-2100, Mymanshing',
        education: 'Dhaka International University',
        gender: 'male',
        relationship: 'in_relationship',
    }

    public notification = {
        comments: ['push',],
        tags: ['push',],
        reminders: ['push', 'sms'],
        requests: ['push', 'email',],
        birthdays: ['push', 'sms'],
    }
    public postPrivacy= 'public'
    constructor() {
    }


}
