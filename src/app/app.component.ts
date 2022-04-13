import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from './email';
import { EmailService } from './email.service';
import { EMAILS } from './mock-emails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  localEmails = EMAILS;
  selectedEmail?: Email;
  emails$!: Observable<Email[]>;
  
  constructor(private emailService: EmailService) {}
  
  ngOnInit() {
    this.emails$ = this.emailService.getEmails();
    //  We will be filtering from Observable stream
    this.emails$.subscribe(emails => {
      // Keep a local copy of current items for display
      this.localEmails = emails;
    });
  }

  onRemoveClick($event: Email) {
    // Get the index of the localEmails array from the $event
    // passed in from app-email-container
    const index = this.localEmails.indexOf($event);
    if(index > -1) {
      // Remove the email from the emails array
      this.localEmails.splice(index, 1);
    }
  }
  
  onSelect(email: Email): void {
    this.selectedEmail = email;
  }
  
  getEmails(): void {
    this.emailService.getEmails();
  }


}
