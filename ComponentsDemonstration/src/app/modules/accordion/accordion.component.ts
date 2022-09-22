import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  openIndex=-1;
  @Input() items:any=[];
  constructor() { }

  ngOnInit(): void {
  }

  onClick(value:number)
  {
    
    if(value==this.openIndex)
    {
      this.openIndex=-1;
    }
    else{
      this.openIndex=value;
    }
  
  }
}
