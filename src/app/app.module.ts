import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {
  ButtonModule,
  CalendarModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  FieldsetModule,
  CheckboxModule,
  InputTextareaModule,
  PanelModule,
  RadioButtonModule,
  SharedModule,
  BlockUIModule,
  SpinnerModule
} from 'primeng/primeng'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTableModule,
    DialogModule,
    RadioButtonModule,
    CalendarModule,
    DropdownModule,
    BlockUIModule,
    CheckboxModule,
    PanelModule,
    ButtonModule,
    InputTextareaModule,
    FieldsetModule,

    SpinnerModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
