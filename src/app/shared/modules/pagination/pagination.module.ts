import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './components/pagination/pagination.component';
import { UtilsService } from '../../services/utils.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [UtilsService],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
})
export class PaginationModule {}
