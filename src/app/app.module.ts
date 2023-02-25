import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AntDesignModule } from './modules/ant-design.module';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { SampleService } from './services/sample.service';
import { IAppConfig } from './interfaces/app-config.interface';
import { AppConfigValues } from './constants/app-config';
import { CssComponent } from './pages/css/css.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { PortalModule } from '@angular/cdk/portal';
import { GridComponent } from './components/grid/grid.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { WebkitComponent } from './components/webkit/webkit.component';


export const APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

export const appInitFactory = (sampleService: SampleService) => {
  return () => sampleService.loadData();
}

@NgModule({
  declarations: [AppComponent, LoginComponent, ChildComponentComponent, CssComponent, FlexboxComponent, GridComponent, ScrollbarComponent, WebkitComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AntDesignModule,
    PortalModule
  ],
  providers: [
    SampleService,
    { provide: APP_CONFIG, useValue: AppConfigValues },
    { provide: APP_INITIALIZER, useFactory: appInitFactory, multi: true, deps: [SampleService] }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
