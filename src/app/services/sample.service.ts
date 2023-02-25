import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {
  appName!: string;
  pageSize!: number;

  constructor() { }

  sayHello(): void {
    console.log('Hello');
  }

  loadData(): Promise<string> {
    return new Promise(resolve => {
      this.appName = 'my Angular app';
      this.pageSize = 13;
      resolve('load Data');
    })
  }
}
