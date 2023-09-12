import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  switchOn = false;
  toggle () {
    this.switchOn = !this.switchOn;
  }
}
