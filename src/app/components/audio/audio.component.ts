import { Component, EventEmitter, Input, Output, effect } from '@angular/core';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss'
})
export class AudioComponent {
  @Input() public isMuted: boolean = true;
  @Output() public isMutedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggleVolume(): void {
    this.isMuted = !this.isMuted;
    this.isMutedChange.emit(this.isMuted);
  }
}