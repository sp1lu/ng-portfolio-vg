import { Component } from '@angular/core';
import { CreditComponent } from '../../components/credit/credit.component';

@Component({
  selector: 'app-credits',
  standalone: true,
  imports: [CreditComponent],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.scss'
})
export class CreditsComponent {

}
