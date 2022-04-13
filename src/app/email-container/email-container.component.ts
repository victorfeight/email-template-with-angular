import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-container',
  templateUrl: './email-container.component.html',
  styleUrls: ['./email-container.component.css']
})
export class EmailContainerComponent implements OnInit {
  
  @Input() email: Email | undefined;
  
  // Output will emit removal events, telling app-component,
  // "Delete me!"
  @Output() removeClick = new EventEmitter<Email>();


  ngOnInit(): void {
  }

  delete(email: Email): void {
    // Emit the event 
    this.removeClick.emit(email);
      // this.emails = this.emails.filter(e => e !== email);
      // this.emails = this.emails.splice(email.id, 1);
  }
  

}
