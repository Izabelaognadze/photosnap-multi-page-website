import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-section',
  templateUrl: './story-section.component.html',
  styleUrls: ['./story-section.component.css']
})
export class StorySectionComponent implements OnInit{
  @Input() public mobImg = "";
  @Input() public deskImg = "";
  @Input() public storyHeader = "";
  @Input() public by = "";
  @Input() public time = "";

  constructor(){}
  ngOnInit(): void {
    
  }
  getDeskBgStyle(){
    return `url(${this.deskImg})`
  }
  getMobBgStyle(){
    return `url(${this.mobImg})`
  }
}
