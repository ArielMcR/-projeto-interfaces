import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-eif',
  templateUrl: './classes-eif.component.html',
  styleUrls: ['./classes-eif.component.css']
})
export class ClassesEIfComponent implements OnInit {
  classes = ["DIV-main"];
  constructor() { }

  ngOnInit(): void {
  }

}
