import { Component } from '@angular/core';
import {CommonModule, IMAGE_CONFIG, ImageLoaderConfig, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-image-directive',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image-directive.component.html',
  styleUrls: ['./image-directive.component.sass'],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: (config: ImageLoaderConfig) => {
        return `http://localhost:4200/assets/img?src=${config.src}&width=${config.width}`;
      },
      // useValue: {
      //   breakpoints: [16, 48, 96, 128, 384, 640, 750, 828, 1080, 1200, 1920]
      // }
    },
  ],
})
export class ImageDirectiveComponent {
  // This is cool
  // https://johnfraney.ca/tools/responsive-image-generator/
}
