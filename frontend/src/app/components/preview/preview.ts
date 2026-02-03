import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkdownService as NgxMarkdownService } from 'ngx-markdown';
import { MarkdownService } from '../../services/markdown';
import { LucideAngularModule, Download, Copy, Check } from 'lucide-angular';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule, MarkdownModule, LucideAngularModule],
  templateUrl: './preview.html',
  styleUrl: './preview.css'
})
export class PreviewComponent {
  readonly Download = Download;
  readonly Copy = Copy;
  readonly Check = Check;

  @Input() content = '';

  copied = false;

  constructor(private markdownService: MarkdownService) { }

  onDownload() {
    this.markdownService.downloadMarkdown(this.content);
  }

  onCopy() {
    navigator.clipboard.writeText(this.content);
    this.copied = true;
    setTimeout(() => this.copied = false, 2000);
  }
}
