import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit{
  checked = "assets/images/pricing/check.svg"
  @Input() public basicOpacity = "";
  @Input() public proOpacity = "";
  @Input() public businessOpacity = "";
  @Input() public header = "";
  constructor(){}
  ngOnInit(): void {
    
  }

}
