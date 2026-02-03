import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header';
import { ConverterComponent } from './components/converter/converter';
import { PreviewComponent } from './components/preview/preview';
import { HelpComponent } from './components/help/help';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ConverterComponent,
    PreviewComponent,
    HelpComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  markdownResult = '';
  showHelp = signal(true); // Default to true as per user request to be visible

  onConverted(event: string) {
    this.markdownResult = event;
  }

  toggleHelp() {
    this.showHelp.set(!this.showHelp());
  }
}
