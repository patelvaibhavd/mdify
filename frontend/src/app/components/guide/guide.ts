import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LucideAngularModule, BookOpen, Wand2 } from 'lucide-angular';
import { MARKDOWN_RULES } from '../../constants/markdown-rules';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './guide.html',
  styleUrl: './guide.scss'
})
export class GuideComponent {
  readonly BookOpen = BookOpen;
  readonly Wand2 = Wand2;

  public rules: any[];

  constructor(private sanitizer: DomSanitizer) {
    this.rules = MARKDOWN_RULES.map(rule => ({
      ...rule,
      safeExample: this.sanitizer.bypassSecurityTrustHtml(rule.example)
    }));
  }
}
