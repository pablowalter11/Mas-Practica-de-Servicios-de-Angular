import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CuchilloService } from '../../services/cuchillo.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Cuchillo } from '../../interface/cuchillo.interface';

@Component({
  selector: 'app-detail-cuchillo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-cuchillo.component.html',
  styleUrl: './detail-cuchillo.component.css'
})
export class DetailCuchilloComponent implements OnInit{
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      {
        next:(param) => {
          this.id = param.get('id')
          this.getCuchilloById(this.id)
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }

  id: string | null = null

  cuchi?: Cuchillo

  cuchilloService = inject(CuchilloService)
  activatedRoute = inject(ActivatedRoute)

  getCuchilloById(id: string | null) {
    this.cuchilloService.getCuchilloById(id).subscribe(
      {
        next: (cuchi: Cuchillo) => {
          this.cuchi = cuchi
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }

}
