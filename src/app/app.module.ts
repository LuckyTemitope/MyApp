import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { BooksComponent } from './books/books.component';

@NgModule( {

  declarations: [AppComponent, BooksComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
}
)

export class AppModule {}
