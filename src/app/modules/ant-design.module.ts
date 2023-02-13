import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import {
  UserOutline,
  LockOutline,
  AlertOutline,
} from '@ant-design/icons-angular/icons';


const icons: IconDefinition[] = [UserOutline, AlertOutline, LockOutline];

@NgModule({
  imports: [
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule.forRoot(icons),
    NzCheckboxModule,
  ],
  exports: [NzInputModule, NzFormModule, NzButtonModule, NzCheckboxModule],
})
export class AntDesignModule {}
