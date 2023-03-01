import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gx-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ScrollbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
