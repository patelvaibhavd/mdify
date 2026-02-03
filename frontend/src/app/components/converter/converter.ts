import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkdownService } from '../../services/markdown';
import { LucideAngularModule, Upload, Wand2, Download, Trash2, Loader2 } from 'lucide-angular';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './converter.html',
  styleUrl: './converter.scss'
})
export class ConverterComponent {
  readonly Upload = Upload;
  readonly Wand2 = Wand2;
  readonly Download = Download;
  readonly Trash2 = Trash2;
  readonly Loader2 = Loader2;

  inputText = '';
  isConverting = signal(false);
  selectedProvider = 'groq';

  @Output() converted = new EventEmitter<string>();

  constructor(private markdownService: MarkdownService) { }

  async onConvert() {
    if (!this.inputText.trim()) return;

    this.isConverting.set(true);
    this.markdownService.convertText(this.inputText, this.selectedProvider).subscribe({
      next: (res) => {
        this.converted.emit(res.markdown);
        this.isConverting.set(false);
      },
      error: (err) => {
        console.error(err);
        this.isConverting.set(false);
        alert('Failed to convert. Please check if the backend is running and API keys are set.');
      }
    });
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.inputText = e.target.result;
      };
      reader.readAsText(file);
    }
  }

  clear() {
    this.inputText = '';
    this.converted.emit('');
  }
}
