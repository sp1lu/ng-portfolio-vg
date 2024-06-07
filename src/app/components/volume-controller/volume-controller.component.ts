import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-volume-controller',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './volume-controller.component.html',
  styleUrl: './volume-controller.component.scss'
})
export class VolumeControllerComponent {
  @Input() public volume: number = 1;
  @Output() public volumeChangedEvent: EventEmitter<number> = new EventEmitter<number>();

  public onChange(event: Event): void {  
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.volumeChangedEvent.emit(parseFloat(input.value));
  }
}
