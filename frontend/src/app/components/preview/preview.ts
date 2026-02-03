import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownService } from '../../services/markdown';
import { LucideAngularModule, Download, Copy, CheckCircle, Eye, FileCode } from 'lucide-angular';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule, MarkdownModule, LucideAngularModule],
  templateUrl: './preview.html',
  styleUrl: './preview.css'
})
export class PreviewComponent {
  public readonly Download = Download;
  public readonly Copy = Copy;
  public readonly CheckCircle = CheckCircle;
  public readonly Eye = Eye;
  public readonly FileCode = FileCode;

  @Input() public content = '';

  public showCopySuccess = false;
  public copyText = 'Copy to clipboard';

  constructor(private markdownService: MarkdownService) { }

  public onDownload() {
    if (!this.content) return;
    this.markdownService.downloadMarkdown(this.content);
  }

  public onCopy() {
    if (!this.content) return;
    navigator.clipboard.writeText(this.content);
    this.showCopySuccess = true;
    this.copyText = 'Copied!';
    setTimeout(() => {
      this.showCopySuccess = false;
      this.copyText = 'Copy to clipboard';
    }, 2000);
  }
}
