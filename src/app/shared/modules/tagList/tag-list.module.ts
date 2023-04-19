import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TagListComponent } from './components/tagList/tagList.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TagListComponent],
  exports: [TagListComponent],
})
export class TagListModule {}
