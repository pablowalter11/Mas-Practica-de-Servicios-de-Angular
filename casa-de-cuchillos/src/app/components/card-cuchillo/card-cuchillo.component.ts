import { Component, inject, Input } from '@angular/core';
import { Cuchillo } from '../../interface/cuchillo.interface';
import { CuchilloService } from '../../services/cuchillo.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-cuchillo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-cuchillo.component.html',
  styleUrl: './card-cuchillo.component.css'
})
export class CardCuchilloComponent {
  @Input()
  cuchi?: Cuchillo

  cuchilloService = inject(CuchilloService)
  router = inject(Router)

  deleteCuchilloById(id: any) {
    this.cuchilloService.deleteCuchilloById(id).subscribe(
      {
        next: () => {
          console.log('Cuchillo Eliminado')
          this.router.navigateByUrl('')
            .then( () => {
              this.router.navigateByUrl('/list')
            })
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
