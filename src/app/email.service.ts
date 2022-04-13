import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Email } from './email';
import { EMAILS } from './mock-emails';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Service for Displaying the items
  getEmails(): Observable<Email[]> {
    const emails$: Observable<Email[]> = of(EMAILS);
    return emails$;
  }

}