import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MARKDOWN_RULES } from '../../constants/markdown-rules';
import { LucideAngularModule, Info, X, BookOpen } from 'lucide-angular';

interface MarkdownRule {
  name: string;
  syntax: string;
  example: string;
}

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './help.html',
  styleUrl: './help.css'
})
export class HelpComponent {
  readonly Info = Info;
  readonly X = X;
  readonly BookOpen = BookOpen;

  rules: MarkdownRule[] = MARKDOWN_RULES;

  @Output() close = new EventEmitter<void>();
}
