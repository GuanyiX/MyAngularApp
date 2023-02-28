import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PortalModule } from '@angular/cdk/portal';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { SampleService } from './services/sample.service';
import { IAppConfig } from './interfaces/app-config.interface';
import { AppConfigValues } from './constants/app-config';
import { CssComponent } from './pages/css/css.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { GridComponent } from './components/grid/grid.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { WebkitComponent } from './components/webkit/webkit.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export const APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

export const appInitFactory = (sampleService: SampleService) => {
  return () => sampleService.loadData();
};

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    CssComponent,
    FlexboxComponent,
    GridComponent,
    ScrollbarComponent,
    WebkitComponent,
    RxjsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    SampleService,
    { provide: APP_CONFIG, useValue: AppConfigValues },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      multi: true,
      deps: [SampleService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
