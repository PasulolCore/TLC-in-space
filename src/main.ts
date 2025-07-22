  import { bootstrapApplication } from '@angular/platform-browser';
  import { appConfig } from './app/app.config';
  import { AppComponent } from './app/app.component';
  
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => {
      console.error('Application bootstrap error:', err);
      // Fallback for development
      if (typeof window !== 'undefined') {
        document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;">Loading TLCS Application...</div>';
      }
    });
  