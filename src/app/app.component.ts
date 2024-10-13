import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PdfViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PDF-Editor';
}
