import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'gx-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // const source = of(2000, 1000);
    // const example = source.pipe(
    //   concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    // );

    // const subscribe = example.subscribe(val =>
    //   console.log(`With concatMap: ${val}`)
    // );

    // const mergeMapExample = source
    //   .pipe(
    //     // just so we can log this after the first example has run
    //     delay(5000),
    //     mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    //   )
    //   .subscribe(val => console.log(`With mergeMap: ${val}`));
  }

}
