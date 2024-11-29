import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardCuchilloComponent } from '../card-cuchillo/card-cuchillo.component';
import { Cuchillo } from '../../interface/cuchillo.interface';
import { CuchilloService } from '../../services/cuchillo.service';

@Component({
  selector: 'app-list-cuchillo',
  standalone: true,
  imports: [CommonModule, CardCuchilloComponent],
  templateUrl: './list-cuchillo.component.html',
  styleUrl: './list-cuchillo.component.css'
})
export class ListCuchilloComponent implements OnInit{
  ngOnInit(): void {
    this.listarCuchillos()
  }

  listaCuchillos: Cuchillo[] = []

  cuchillosService = inject(CuchilloService)

  listarCuchillos() {
    this.getCuchillosFromBdD()
  }

  getCuchillosFromBdD() {
    this.cuchillosService.getCuchillos().subscribe(
      {
        next: (cuchis: Cuchillo[]) => {
          this.listaCuchillos = cuchis
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
