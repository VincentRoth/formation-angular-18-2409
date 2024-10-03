import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VetService } from '../../shared/api/vet.service';
import { Router } from '@angular/router';

interface VetFormType {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrl: './vet-form.component.scss',
})
export class VetFormComponent implements OnInit {
  vetForm: FormGroup<VetFormType>;

  constructor(private vetService: VetService, private router: Router) {}

  ngOnInit(): void {
    this.vetForm = new FormGroup({
      firstName: new FormControl<string>(''),
      lastName: new FormControl<string>(''),
    });
  }

  onSubmit(): void {
    const formModel = this.vetForm.getRawValue();
    this.vetService.create(formModel).subscribe((data) => {
      this.router.navigate(['/veterinarians', data.id]);
    });
  }
}
