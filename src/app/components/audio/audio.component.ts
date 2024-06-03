import { Component } from '@angular/core';

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

  public ngOnInit(): void {
    this.audio.play();
  }

  public toggleVolume(): void {    
    this.isMuted ? this.isMuted = false : this.isMuted = true;
  }
}