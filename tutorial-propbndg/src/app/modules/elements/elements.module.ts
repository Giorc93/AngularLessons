import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceComponent } from './dice/dice.component';

//CREATED MODULE AND COMPONENT (DiceComponent)

@NgModule({
  declarations: [DiceComponent],
  imports: [CommonModule],
  exports: [DiceComponent],
})
export class ElementsModule {}
