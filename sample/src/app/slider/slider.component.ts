import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  stepIndex: number = 0;
  showTicks=true;
  steps: number[] = [50,100,150];
  finalValue: number = 50;
  onInputChange($event: any) {
    console.log($event.value);
    this.stepIndex = +$event.value;
    this.finalValue = this.steps[this.stepIndex];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
