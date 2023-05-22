import { LightningElement,track } from 'lwc';

export default class TimeLwc extends LightningElement {
        @track greeting;
        @track currentTime;
    
        connectedCallback() {
            this.updateTime();
            setInterval(() => {
                this.updateTime();
            }, 1000);
        }
    
        updateTime() {
            const now = new Date();
            const hour = now.getHours();
    
            if (hour >= 0 && hour < 12) {
                this.greeting = 'Good morning';
            } else if (hour >= 12 && hour < 17) {
                this.greeting = 'Good afternoon';
            } else if (hour >= 17 && hour < 20) {
                this.greeting = 'Good evening';
            } else {
                this.greeting = 'Good night';
            }
    
            const options = { hour: '2-digit', minute: '2-digit', hour12: false };
            this.currentTime = now.toLocaleTimeString([], options);
        }
}