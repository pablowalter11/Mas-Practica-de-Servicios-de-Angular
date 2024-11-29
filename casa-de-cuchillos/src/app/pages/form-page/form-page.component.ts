import { Component } from '@angular/core';
import { FormCuchilloComponent } from '../../components/form-cuchillo/form-cuchillo.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [FormCuchilloComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {

}
