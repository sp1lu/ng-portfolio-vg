import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  public music: HTMLAudioElement = new Audio('../../assets/audio/gloomy_sad_background_music.mp3');

  private _isMusicStarted: boolean = false;
  public get isMusicStarted(): boolean {
    return this._isMusicStarted
  }
  public set isMusicStarted(value: boolean) {
    this._isMusicStarted = value;
    if (this.isMusicStarted) this.playMusic();
  }

  private _isAudioMuted: boolean = false;
  public get isAudioMuted(): boolean {
    return this._isAudioMuted;
  }
  public set isAudioMuted(value: boolean) {
    this._isAudioMuted = value;
    this.toggleAudio(this.isAudioMuted);
    if (!this.isMusicStarted) this.isMusicStarted = true;
  }

  private _musicVolume: number = .25;
  public get musicVolume(): number {
    return this._musicVolume;
  }
  public set musicVolume(value: number) {
    this._musicVolume = value;
    this.music.volume = this.musicVolume;
    if (!this.isMusicStarted) this.isMusicStarted = true;
  }

  public hoverSoundUri: string = '../../assets/audio/menu-selection.mp3';

  private _soundVolume: number = .1;
  public get soundVolume(): number {
    return this._soundVolume;
  }
  public set soundVolume(value: number) {
    this._soundVolume = value;
  }

  constructor() { }

  public playMusic(): void {
    this.music.play();
    this.music.volume = this.musicVolume;
    this.music.loop = true;
  }

  public toggleAudio(value: boolean): void {
    this.music.muted = value;
    value ? this.soundVolume = 0 : this.soundVolume = .1;
  }

  public playSound(audioUri: string): void {
    const audio: HTMLAudioElement = new Audio(audioUri);
    audio.volume = this.soundVolume;
    audio.play();
  }
}
