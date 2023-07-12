import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() type!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() errorMessage!: string;
  @Input() field!: string;

  candidatoForm!: FormGroup;

  ngOnInit(): void {
    this.candidatoForm = new FormGroup({
      [this.field]: new FormControl('', [Validators.required])
    });
  }

  get formControl() {
    return this.candidatoForm.get(this.field);
  }

  submit() {
    if (this.candidatoForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.candidatoForm.value);
  }
}
