import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, AfterContentInit {
  sampleValue = 2;

  @ContentChild('parentComp') parentComp!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // console.log(this.parentComp);
  }

}
