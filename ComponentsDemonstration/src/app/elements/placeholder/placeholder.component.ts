import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  @Input() lines=5;
  @Input() header=true;
  constructor() { }

  ngOnInit(): void {
  }

}
