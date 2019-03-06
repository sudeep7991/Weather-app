import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRpW7Bn4tSEVYgoK-26EZjuRMjffC12Zo'
    }),
  ],
  exports: [
    FormsModule,
    AgmCoreModule
  ],
  declarations: []
})
export class SharedModule { }
