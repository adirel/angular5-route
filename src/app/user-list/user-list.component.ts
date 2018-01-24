import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { name: 'adir' , age: '22'},
    { name: 'peter' , age: '222'},
    { name: 'koko' , age: '232'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
