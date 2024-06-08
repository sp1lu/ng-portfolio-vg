import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ThreeComponent } from './components/three/three.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { AudioComponent } from './components/audio/audio.component';
import { NgStyle } from '@angular/common';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreeComponent, CopyrightComponent, AudioComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'ng-portfolio-vg';
  public isHomepage: boolean = false;
  public isMusicMuted: boolean;

  constructor(private router: Router, private audioService: AudioService) {
    this.isMusicMuted = this.audioService.isAudioMuted;
  }

  public ngOnInit(): void {
    this.router.events.subscribe(event => {      
      if (event instanceof NavigationEnd) {
        this.isHomepage = this.router.url === '/' ? true : false;
      }
    });
  }

  public toggleAudio(value: boolean): void {
    this.audioService.isAudioMuted = value;
  }
}