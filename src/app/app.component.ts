import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

interface INavOption {
  matIcon: string;
  content: string;
  selected: boolean;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navOptions: INavOption[] = [
    { matIcon: 'css', content: 'CSS', selected: true, url: '/css' },
    {
      matIcon: 'javascript',
      content: 'RxJS',
      selected: false,
      url: '/rxjs',
    },
  ];

  constructor(private router: Router, private readonly location: Location) {}

  ngOnInit(): void {
    const currentUrl = this.location.path();
    if (this.navOptions.map(option => option.url).includes(currentUrl))
      this.onNavOptionSelect(
        this.navOptions.findIndex((option) => option.url === currentUrl)
      ); 
  }

  onNavOptionSelect(selectedIndex: number): void {
    this.navOptions = this.navOptions.map((option, index) => {
      option.selected = index === selectedIndex;
      return option;
    });

    this.router.navigateByUrl(
      this.navOptions.find((_, index) => index === selectedIndex)?.url ?? '/css'
    );
  }
}
