import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeComponent } from './components/three/three.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreeComponent, CopyrightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-portfolio-vg';
}
