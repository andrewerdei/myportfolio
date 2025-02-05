import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  CShidden = false;
  Mhidden = false;

  minimizeCS(): void{
    this.CShidden = !this.CShidden;
    console.log('minimizeCS');
  }

  minimizeM(): void{
    this.Mhidden = !this.Mhidden;
  }

}
