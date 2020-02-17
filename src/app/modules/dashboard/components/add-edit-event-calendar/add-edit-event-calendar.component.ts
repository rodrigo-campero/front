import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-add-edit-event-calendar',
  templateUrl: './add-edit-event-calendar.component.html',
  styleUrls: ['./add-edit-event-calendar.component.scss']
})
export class AddEditEventCalendarComponent implements OnInit {
  eventCalendarForm: FormGroup;
  @Input() start: Date;

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<AddEditEventCalendarComponent>) { }

  ngOnInit() {
    this.eventCalendarForm = this.fb.group({
      title: ['', Validators.required],
      start: [this.start, Validators.required],
      end: [this.start, Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.close(form.value);
    }
    console.log('Valid?', form.valid);
    console.log('Name', form.value.title);
    console.log('Email', form.value.start);
    console.log('Message', form.value.end);
  }

  close(value?: any) {
    this.dialogRef.close(value);
  }
}
