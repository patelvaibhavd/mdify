import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from '../converter/converter';
import { PreviewComponent } from '../preview/preview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ConverterComponent, PreviewComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  markdownResult = '';

  onConverted(event: string) {
    this.markdownResult = event;
  }
}
