import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { LucideAngularModule, Moon, Sun, Github, FileText, Settings, Upload, Wand2, Download, Trash2, Loader2, Info, X, Copy, Check } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideMarkdown(),
    importProvidersFrom(LucideAngularModule.pick({ Moon, Sun, Github, FileText, Settings, Upload, Wand2, Download, Trash2, Loader2, Info, X, Copy, Check }))
  ]
};
