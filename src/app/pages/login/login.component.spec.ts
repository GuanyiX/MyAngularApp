import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { AntDesignModule } from 'src/app/modules/ant-design.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ AntDesignModule, FormsModule, ReactiveFormsModule ],
      providers: [UntypedFormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TEST login form group ELEMENT COUNT', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('form');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(3);
  });

  it('CHECK INITIAL VALUES FOR LOGIN FORM', () => {
    const loginFormValue = component.validateForm.value;
    const initialFormValue = {
      userName: null,
      password: null,
      remember: false
    };
    expect(loginFormValue).toEqual(initialFormValue)
  });

  it('CHECK LOGIN FORM IS VALID WHEN VALIDATIONS ARE FULFILED ', () => {
    const userNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('form').querySelectorAll('input')[0];
    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('form').querySelectorAll('input')[1];
    userNameElement.value = 'xiaoguanyi2015@gmail.com';
    passwordElement.value = '1234';
    userNameElement.dispatchEvent(new Event('input'));
    passwordElement.dispatchEvent(new Event('input'));
    const isLoginValid = component.validateForm.valid;
    fixture.whenStable().then(() => {
      expect(isLoginValid).toBeTruthy();
    });
  });
});
