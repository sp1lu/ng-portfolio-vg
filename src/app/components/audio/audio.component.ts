import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss'
})
export class AudioComponent {
  public audio: HTMLAudioElement = new Audio('../../assets/audio/gloomy_sad_background_music.mp3');

  private _isMuted: boolean = false;
  public get isMuted(): boolean {
    return this._isMuted;
  }
  public set isMuted(value: boolean) {
    this._isMuted = value;
    this.audio.muted = this.isMuted;   
  }

  private _volume: number = 1;
  public get volume(): number {
    return this._volume;
  }
  @Input() set volume(value: number) {
    if (!value) return;
    this._volume = value;
  }

  public ngOnInit(): void {
    this.audio.play();
  }

  public toggleVolume(): void {    
    this.isMuted ? this.isMuted = false : this.isMuted = true;
  }
}