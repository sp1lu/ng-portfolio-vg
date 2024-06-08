import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private audioService: AudioService) { }

  public playHoverSound(): void {
    this.audioService.playSound(this.audioService.hoverSoundUri);
  }
}
