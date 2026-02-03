import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, BookOpen } from 'lucide-angular';
import { MARKDOWN_RULES } from '../../constants/markdown-rules';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './guide.html',
  styleUrl: './guide.css'
})
export class GuideComponent {
  readonly BookOpen = BookOpen;
  rules = MARKDOWN_RULES;
}
