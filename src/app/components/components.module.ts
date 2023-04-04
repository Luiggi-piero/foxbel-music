import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';



@NgModule({
  declarations: [NavigationBarComponent, VideoListComponent, VideoDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationBarComponent, VideoListComponent, VideoDetailComponent],
})
export class ComponentsModule { }
