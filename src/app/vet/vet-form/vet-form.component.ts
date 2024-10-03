import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VetService } from '../../shared/api/vet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vet } from '../../shared/api/models/vet';

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
  id: number | string;
  vetForm: FormGroup<VetFormType>;

  constructor(
    private vetService: VetService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(id).subscribe((vet) => {
        this.id = vet.id;
        this.iniFormGroup(vet);
      });
    } else {
      this.iniFormGroup();
    }
  }

  onSubmit(): void {
    if (this.vetForm.invalid) {
      return;
    }

    const formModel: Vet = this.vetForm.getRawValue();
    formModel.id = this.id;
    this.vetService.save(formModel).subscribe((data) => {
      this.router.navigate(['/veterinarians', data.id]);
    });
  }

  private iniFormGroup(
    vet: Vet = {
      firstName: '',
      lastName: '',
    }
  ): void {
    this.vetForm = new FormGroup({
      firstName: new FormControl<string>(vet.firstName, [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl<string>(vet.lastName, Validators.required),
    });
  }
}
