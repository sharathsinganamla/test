import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './atoms/textbox';
import { DropDownComponent } from './atoms/dropdown';



@NgModule({
  declarations: [DynamicFormBuilderComponent, FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[DynamicFormBuilderComponent]
})
export class DynamicFormBuilderModule { }
