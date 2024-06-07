import { Component, effect } from '@angular/core';
import { MasterVolumeComponent } from '../../components/master-volume/master-volume.component';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [MasterVolumeComponent],
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
