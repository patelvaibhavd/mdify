import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from '../converter/converter';
import { PreviewComponent } from '../preview/preview';
import { LiveEditorComponent } from '../live-editor/live-editor';
import { LucideAngularModule, Sparkles, PenLine } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ConverterComponent, PreviewComponent, LiveEditorComponent, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  readonly Sparkles = Sparkles;
  readonly PenLine = PenLine;

  markdownResult = '';
  activeMode = signal<'ai' | 'live'>('ai');

  onConverted(event: string) {
    this.markdownResult = event;
  }

  setMode(mode: 'ai' | 'live') {
    this.activeMode.set(mode);
    this.markdownResult = ''; // Clear result when switching
  }
}
