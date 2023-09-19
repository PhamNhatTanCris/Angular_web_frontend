import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
  <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>`,
  styles: [`
  .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }`]
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor = '#ccc';
  @Input('back-color') progressColor = 'red';
  @Input() set progress(val: number){
    this._process = val;
  };
  private _process = 50;

  get progress(){
    return this._process;
  }


  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}

