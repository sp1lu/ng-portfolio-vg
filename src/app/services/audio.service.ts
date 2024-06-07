import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  public isStarted: WritableSignal<boolean> = signal(false);
  public volume: WritableSignal<number> = signal(1);

  constructor() { }
}
