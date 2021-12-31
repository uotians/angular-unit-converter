import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() theappname: string

  constructor() {
    this.theappname = "Default name"
  }

  ngOnInit(): void {
  }

}
