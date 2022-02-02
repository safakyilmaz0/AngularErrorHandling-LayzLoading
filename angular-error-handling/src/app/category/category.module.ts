import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCreateComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
        { path: 'categories/create', component: CategoryCreateComponent }
    ]),
    SharedModule
  ],
  exports:[
    CategoryComponent,    
    CategoryCreateComponent
  ]
})
export class CategoryModule { }
