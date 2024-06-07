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
  public volume: number = 1;

  constructor(private audioService: AudioService) {
    effect(() => {
      this.volume = this.audioService.volume();
    })
  }

  public volumeChanged(value: number): void {
    this.audioService.volume.set(value);
  }
}
