import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formData: { username: string; name: string } = {
    username: '',
    name: '',
  };

  onSubmit(form: NgForm): void {
    console.log('form value : ', form.value);
  }
}
