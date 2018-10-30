import { Component } from '@angular/core';
import { ToastService } from './toast/service/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-toast';

  constructor(private ts: ToastService) {}

  showErrorMessage() {
    this.ts.showErrorMessage('hola error');
  }
  showSuccessMessage() {
    this.ts.showSuccessMessage('hola success');
  }
  showInfoMessage() {
    this.ts.showInfoMessage('hola info');
  }
  showWarningMessage() {
    this.ts.showWarningMessage('hola warning');
  }
}
