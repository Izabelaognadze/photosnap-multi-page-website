import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.css']
})
export class ArrowButtonComponent implements OnInit{
  @Input() public arrowButtonText = "";
  @Input() public textClr = "";

  constructor(){}
  ngOnInit():void{}
}
