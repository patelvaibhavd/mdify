import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';
import { LucideAngularModule, Moon, Sun, Monitor } from 'lucide-angular';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class SettingsComponent {
  readonly Moon = Moon;
  readonly Sun = Sun;
  readonly Monitor = Monitor;

  constructor(public themeService: ThemeService) { }
}
