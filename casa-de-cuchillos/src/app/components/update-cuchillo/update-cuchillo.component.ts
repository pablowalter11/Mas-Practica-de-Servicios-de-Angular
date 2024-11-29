import { Component, inject, OnInit } from '@angular/core';
import { CuchilloService } from '../../services/cuchillo.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuchillo } from '../../interface/cuchillo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-cuchillo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-cuchillo.component.html',
  styleUrl: './update-cuchillo.component.css'
})
export class UpdateCuchilloComponent implements OnInit{
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

  cuchilloCervice = inject(CuchilloService)
  formBuilder = inject(FormBuilder)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

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

  getCuchilloById(id: string | null) {
    this.cuchilloCervice.getCuchilloById(id).subscribe(
      {
        next:(cuchi: Cuchillo) => {
          this.form.controls['nombre'].setValue(cuchi.nombre),
          this.form.controls['tipo'].setValue(cuchi.tipo),
          this.form.controls['tipo_filo'].setValue(cuchi.tipo_filo),
          this.form.controls['material_hoja'].setValue(cuchi.material_hoja),
          this.form.controls['material_mango'].setValue(cuchi.material_mango),
          this.form.controls['longitud_hoja'].setValue(cuchi.longitud_hoja),
          this.form.controls['longitud_total'].setValue(cuchi.longitud_total)
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }

  updateCuchillo() {
    if (this.form.invalid) return 

    const cuchi = this.form.getRawValue()

    this.cuchilloCervice.putCuchillo(cuchi, this.id).subscribe(
      {
        next: () => {
          this.router.navigateByUrl('/list')
        }
      }
    )
  }
}
