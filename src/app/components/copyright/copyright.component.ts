import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss'
})
export class CopyrightComponent {
  public currentYear: number = new Date().getFullYear();
}
