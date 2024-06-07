import { Component, Input, effect } from '@angular/core';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss'
})
export class AudioComponent {
  public audio: HTMLAudioElement = new Audio('../../assets/audio/gloomy_sad_background_music.mp3');
  public isStarted: boolean = false;

  private _volume: number = 1;
  public get volume(): number {
    return this._volume;
  }
  public set volume(value: number) {
    if (!value) return;
    this._volume = value;
    this.audio.volume = this.volume;
  }

  private _isMuted: boolean = true;
  public get isMuted(): boolean {
    return this._isMuted;
  }
  @Input() public set isMuted(value: boolean) {
    this._isMuted = value;
    this.audio.muted = this.isMuted;

    if (this.audio.currentTime === 0) {
      this.audio.play();
      this.audio.loop = true;
    }
  }

  constructor(private audioService: AudioService) {
    effect(() => {
      if (!this.audioService.isStarted()) return;
      this.isStarted = this.audioService.isStarted();
      this.isMuted = false;
    });

    effect(() => this.volume = this.audioService.volume());
  }

  public toggleVolume(): void {
    this.isMuted ? this.isMuted = false : this.isMuted = true;
  }
}