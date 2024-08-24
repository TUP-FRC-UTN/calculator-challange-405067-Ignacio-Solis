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
    
    if (event.target.id == "input1") {
      this.value1 = parseInt(event.data)
    }

    else {
      this.value2 = parseInt(event.data)
    }
  }

  onResult(result: number) {
    this.result = result;
    document.getElementById("result")?.setAttribute("value",String(result))
  }
  
  shouldClear(shouldClear : any) {
    
    if (shouldClear) {
      console.log("func called");
    
      document.getElementById("result")?.setAttribute("value","")
 
    }
  }
  
}
