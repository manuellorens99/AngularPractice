import {Component, signal} from '@angular/core';

@Component({
    templateUrl: './counter-page.component.html',
    styles: `
        button{
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `,
})
export class CounterPageComponent{
    counter = 0;
    counterSignal = signal(0);

    increaseBy(value: number){
        this.counter += value;
    }
    resetCounter(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}