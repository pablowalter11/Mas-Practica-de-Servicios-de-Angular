import { Component } from '@angular/core';
import { DetailCuchilloComponent } from '../../components/detail-cuchillo/detail-cuchillo.component';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [DetailCuchilloComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {

}
