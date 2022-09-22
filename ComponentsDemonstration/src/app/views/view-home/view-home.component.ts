import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  stats=[
    { label:'No of Users',value:12123 },
    { label:'Revenue',value:32425 },
    { label:'Reviews',value:673 }
  ];
  images=[
    {
      src:'./assets/images/couch.jpeg',
      title:'Couch',
      details:'This is a nice couch to setting'
    },
    {
      src:'./assets/images/dresser.jpeg',
      title:'Dresser',
      details:'This is a nice Dresser to store cloths'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
