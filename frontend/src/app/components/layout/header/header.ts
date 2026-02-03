import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme';
import { LucideAngularModule, Moon, Sun, Github, FileText, HelpCircle } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  readonly Moon = Moon;
  readonly Sun = Sun;
  readonly Github = Github;
  readonly FileText = FileText;
  readonly HelpCircle = HelpCircle;

  constructor(public themeService: ThemeService) { }
}
