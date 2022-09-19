import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  data=[
    { name:'James',age:27,job:'Doctor'},
    { name:'Board',age:20,job:'Student'},
    { name:'Camron',age:28,job:'Engineer'},
    { name:'Wade',age:35,job:'Scientist '},
    { name:'John',age:30,job:'Teacher'},
  ];
  header=[
    { key:'name',label:'Name'},
    { key:'age',label:'Age'},
    { key:'job',label:'Job'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
