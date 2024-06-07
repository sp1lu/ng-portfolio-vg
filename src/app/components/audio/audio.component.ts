import { Component, effect } from '@angular/core';
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

  private _isStarted: boolean = false;
  public get isStarted(): boolean {
    return this._isStarted;
  }
  public set isStarted(value: boolean) {
    this._isStarted = value;
    if (!value) return;
    this.audio.play();
    this.audio.loop = true;
  }

  private _volume: number = 1;
  public get volume(): number {
    return this._volume;
  }
  public set volume(value: number) {  
    this._volume = value;
    this.audio.volume = this.volume;
  }

  private _isMuted: boolean = true;
  public get isMuted(): boolean {
    return this._isMuted;
  }
  public set isMuted(value: boolean) {
    this._isMuted = value;
    this.audio.muted = this.isMuted;
    if (this.isMuted && !this.isStarted) this.isStarted = true;
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