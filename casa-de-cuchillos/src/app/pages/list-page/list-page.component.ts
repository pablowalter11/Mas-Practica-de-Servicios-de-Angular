import { Component } from '@angular/core';
import { ListCuchilloComponent } from '../../components/list-cuchillo/list-cuchillo.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ListCuchilloComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

}
