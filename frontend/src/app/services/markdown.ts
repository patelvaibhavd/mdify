import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  convertText(text: string, provider: string): Observable<{ markdown: string }> {
    return this.http.post<{ markdown: string }>(`${this.apiUrl}/convert`, { text, provider });
  }

  downloadMarkdown(content: string, filename: string = 'mdify-export.md') {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
