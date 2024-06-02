import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent {
  @Input() public role: string = '';
  @Input() public credit: string = '';
}
