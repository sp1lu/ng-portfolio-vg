import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-master-volume',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './master-volume.component.html',
  styleUrl: './master-volume.component.scss'
})
export class MasterVolumeComponent {
  @Input() public volume: number = 1;
  @Output() public volumeChangedEvent: EventEmitter<number> = new EventEmitter<number>();

  public onChange(event: Event): void {  
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.volumeChangedEvent.emit(parseFloat(input.value));
  }
}
