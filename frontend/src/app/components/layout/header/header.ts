import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme';
import { SettingsComponent } from '../../settings/settings';
import { LucideAngularModule, Moon, Sun, Github, FileText, Settings } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    SettingsComponent
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  readonly Moon = 'moon';
  readonly Sun = 'sun';
  readonly Github = 'github';
  readonly FileText = 'file-text';
  readonly Settings = 'settings';

  showSettings = false;

  constructor(public themeService: ThemeService) { }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
}
