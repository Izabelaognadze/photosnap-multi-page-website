import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-section',
  templateUrl: './story-section.component.html',
  styleUrls: ['./story-section.component.css']
})
export class StorySectionComponent implements OnInit{
  @Input() public mobImg = "";
  @Input() public deskImg = "";

  constructor(){}
  ngOnInit(): void {
    
  }
}
