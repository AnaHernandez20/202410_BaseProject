import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  //Lo exportamos porque lo vamos a utilizar desde el componente principal de la aplicación
  exports: [BookListComponent],
  declarations: [BookListComponent]
})
export class BookModule { }
