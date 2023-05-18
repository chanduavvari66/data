import { LightningElement } from 'lwc';

export default class TimeAmPm extends LightningElement {
    get currentTime() {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours || 12;
        const formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
        return formattedTime;
    }
}