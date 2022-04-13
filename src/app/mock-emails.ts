// export interface Email {
//   id: number;
//   subject: string;
//   datetime: string;
//   short_content: string;
//   content: string;
//   sender: string;
// }
// 

import { Email } from './email';

export const EMAILS: Email[] = [
  { id: 0, subject: "Daily Dune Quotes", datetime: "02:45pm", 
  short_content: '"The willow submits to the wind and prospers until one day it is...',
  content: `
  The willow submits to the wind and prospers until one day it is many willows — a wall against the wind. This is the willow's purpose."

"Without change something sleeps inside us, and seldom awakens. The sleeper must awaken"

"The mystery of life isn't a problem to solve, but a reality to experience."
`, sender: 're-reply@dune-quotes.media' },
  { id: 1, subject: "Michael Scott Daily Quotes", datetime: "July 3 2020", 
  short_content: "I'm optimistic because everyday I get a little more des...",
  content: `
 I'm optimistic, because everyday I get a little more desperate. And desperate situations yield the quickest results. 
`, sender: 're-reply@michael-scott.media' },
  { id: 2, subject: "VicsTech", datetime: "Feb 9, 2020", 
  short_content: "Learn how you can give us money by calling (209) 322 7...",
  content: `
  Learn how you can give us money by calling (209) 322 7777.
  For 10 easy payments of 5,000, we too help you with bananacoin.
`, sender: 're-reply@banana-coin.media' },

];