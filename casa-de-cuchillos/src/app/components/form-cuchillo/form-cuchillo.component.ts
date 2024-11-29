import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuchilloService } from '../../services/cuchillo.service';
import { Router } from '@angular/router';
import { Cuchillo } from '../../interface/cuchillo.interface';

@Component({
  selector: 'app-form-cuchillo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-cuchillo.component.html',
  styleUrl: './form-cuchillo.component.css'
})
export class FormCuchilloComponent {

  cuchilloService = inject(CuchilloService)
  router = inject(Router)
  formBuilder = inject(FormBuilder)

  form = this.formBuilder.nonNullable.group(
    {
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      tipo_filo: ['', Validators.required],
      material_hoja: ['', Validators.required],
      material_mango: ['', Validators.required],
      longitud_hoja: [0, [Validators.required, Validators.min(7)]],
      longitud_total: [0, [Validators.required, Validators.min(11)]]
    }
  )

  addCuchillo() {
    if (this.form.invalid) return

    const cuchi = this.form.getRawValue()

    this.addCuchilloBdD(cuchi)
  }

  addCuchilloBdD(cuchi: Cuchillo) {
    this.cuchilloService.postCuchillo(cuchi).subscribe(
      {
        next: (cuchi: Cuchillo) => {
          console.log("Cuchillo cargado en el sistema")
          this.router.navigateByUrl('list')
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
