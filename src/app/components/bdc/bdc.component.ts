import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdc',
  templateUrl: './bdc.component.html',
  styleUrls: ['./bdc.component.css']
})
export class BDCComponent implements OnInit {

  active = false;

  botones = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.botones[i] = this.active;
    }
   }

  ngOnInit() {
  }

  showAnswer(id) {

    console.log(id);
    

    if (this.botones[id]) {
      this.botones[id] = false;
    } else {
      this.botones[id] = true;
    }
    console.log(this.botones);

  }

}
