import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() nome:string = '';
  @Input() idade:number = 0;
  @Input() peso:string= '';
  @Input() ocupacao:string = '';
  @Input() local:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
