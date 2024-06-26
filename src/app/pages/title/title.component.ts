import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  private clickListener: (() => void) | null = null;
  private keydownListener: (() => void) | null = null;

  constructor(private renderer: Renderer2, private router: Router, private audioService: AudioService) { }

  public ngOnInit(): void {
    this.clickListener = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    this.keydownListener = this.renderer.listen('document', 'keydown', this.onDocumentKeydown.bind(this));
  }

  public ngOnDestroy(): void {
    if (this.clickListener) this.clickListener();
    if (this.keydownListener) this.keydownListener();
  }

  private onDocumentClick(event: MouseEvent): void {
    this.router.navigate(['/main']);
    this.audioService.isMusicStarted = true;
  }

  private onDocumentKeydown(event: KeyboardEvent): void {
    this.router.navigate(['/main']);
    this.audioService.isMusicStarted = true;
  }
}