import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ItemList',
  templateUrl: './ItemList.component.html',
  styleUrls: ['./ItemList.component.css'],
})
export class ItemListComponent implements OnInit {
  value: string = '';

  constructor() { }

  ngOnInit() {
    this.value = 'This is the list';
  }

}
