import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

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
