import { Component, EventEmitter, Output } from '@angular/core';
import { LogicComponent } from "../logic/logic.component";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [LogicComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  value1 : number = 0;
  value2 : number = 0;
  result : number = 0;
  clear : boolean = false;

  onTextChange(event : any){
    if (event.target.id === "input1") {
      this.value1 = parseInt(event.target.value)
    }
    else {
      this.value2 = parseInt(event.target.value)
    }
    
  }

  onResult(result: number) {
    this.result = result;
    document.getElementById("result")?.setAttribute("value",String(result))
  }
  
  shouldClear() {
      document.getElementById("result")?.setAttribute("value","");
      (<HTMLInputElement>document.getElementById("input1")).value = "0";
      (<HTMLInputElement>document.getElementById("input2")).value = "0"
      this.value1 = 0
      this.value2 = 0
  }
  
}
