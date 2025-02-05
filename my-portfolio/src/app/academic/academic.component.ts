import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'academic',
  standalone: true,
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.css',
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          display: 'None',
          opacity: 0,
          transform: 'translateX(100%)',
          width: 0,
        }),
      ),
      state(
        'open',
        style({
          display: 'block',
          opacity: '100%',
          transform: 'translateX(0)',
          width: '100%',
        }),
      ),
      state(
        'show',
        style({
          opacity: '100%',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('0.5s ease-out')]),
      transition('closed => open', [animate('0.5s ease-in')])
    ]),
  ]
})
export class AcademicComponent {

  hidden1 = false;
  hidden2 = false;
  hidden3 = false;

  hide(project: number){
    if(project == 1){
      this.hidden1 = !this.hidden1;
    }
    if(project == 2){
      this.hidden2 = !this.hidden2;
    }
    else{
      this.hidden3 = !this.hidden3;
    }
  }

}
