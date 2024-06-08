import { Component, effect } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { VolumeControllerComponent } from '../../components/volume-controller/volume-controller.component';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [VolumeControllerComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {
  public musicVolume: number;
  public soundVolume: number;

  constructor(private audioService: AudioService) {
    this.musicVolume = this.audioService.musicVolume;
    this.soundVolume = this.audioService.soundVolume;
  }

  public musicVolumeChanged(value: number): void {
    this.audioService.musicVolume = value;
  }

  public soundVolumeChanged(value: number): void {
    this.audioService.soundVolume = value;
  }
}
