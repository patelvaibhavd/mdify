import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme';
import { SettingsComponent } from '../../settings/settings';
import { LucideAngularModule, Moon, Sun, Github, FileText, Settings, HelpCircle } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule,
    SettingsComponent
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  readonly Moon = Moon;
  readonly Sun = Sun;
  readonly Github = Github;
  readonly FileText = FileText;
  readonly Settings = Settings;
  readonly HelpCircle = HelpCircle;

  showSettings = false;

  constructor(public themeService: ThemeService) { }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
}
