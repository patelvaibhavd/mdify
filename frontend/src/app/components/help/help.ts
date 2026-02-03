import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MARKDOWN_RULES } from '../../constants/markdown-rules';
import { LucideAngularModule, Info, X } from 'lucide-angular';

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

  isOpen = false;
  rules = MARKDOWN_RULES;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
