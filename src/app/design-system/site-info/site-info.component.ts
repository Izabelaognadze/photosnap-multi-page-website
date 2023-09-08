import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.css']
})
export class SiteInfoComponent implements OnInit{
  @Input() public srcImg = "";
  @Input() public header = "";
  @Input() public paragraph = "";
  
  constructor(){}
  ngOnInit():void{}
}
