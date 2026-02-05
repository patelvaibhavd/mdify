import { ApplicationConfig, importProvidersFrom, SecurityContext } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown, MARKED_OPTIONS, SANITIZE } from 'ngx-markdown';
import {
  LucideAngularModule,
  Moon,
  Sun,
  Github,
  FileText,
  HelpCircle,
  Sparkles,
  PenLine,
  Wand2,
  Trash2,
  Loader2,
  Eye,
  FileCode,
  Copy,
  CheckCircle,
  Download,
  BookOpen
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideMarkdown({
      sanitize: {
        provide: SANITIZE,
        useValue: SecurityContext.NONE
      },
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: true,
          pedantic: false
        }
      }
    }),
    importProvidersFrom(LucideAngularModule.pick({
      Moon,
      Sun,
      Github,
      FileText,
      HelpCircle,
      Sparkles,
      PenLine,
      Wand2,
      Trash2,
      Loader2,
      Eye,
      FileCode,
      Copy,
      CheckCircle,
      Download,
      BookOpen
    }))
  ]
};
