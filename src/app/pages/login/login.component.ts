import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG } from 'src/app/app.module';
import { ChildComponentComponent } from 'src/app/components/child-component/child-component.component';
import { IAppConfig } from 'src/app/interfaces/app-config.interface';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  validateForm!: UntypedFormGroup;

  @ViewChild('childComp') childComp!: ChildComponentComponent;
  
  constructor(private fb: UntypedFormBuilder, private sampleService: SampleService, @Inject(APP_CONFIG) private appConfig: IAppConfig, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });
    this.sampleService.sayHello();
    console.log(this.sampleService.appName);
    console.log(this.sampleService.pageSize);
  }

  ngAfterViewInit(): void {
    // console.log(this.childComp);
  }

  submitForm(): void {
    this.router.navigateByUrl('css');
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
