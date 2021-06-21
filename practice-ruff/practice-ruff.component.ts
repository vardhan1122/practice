import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-ruff',
  templateUrl: './practice-ruff.component.html',
  styleUrls: ['./practice-ruff.component.css']
})
export class PracticeRuffComponent implements OnInit {

  public rangeValues:number | undefined;

  // public rangeValuesNumber:number | undefined;
  public rangeValuesNumber:any;

  public presentDate:Date = new Date();

  public myName:string = 'Vardhan Here';
  public isDisabled:boolean = true;



  constructor() { }

  // onUpdateRangeValues(event:any){
  //   this.rangeValuesNumber = event.target.value;
  // }

  onUpdateRangeValues(event:Event){
    this.rangeValuesNumber = (event.target as HTMLInputElement).value;
  }

  


  ngOnInit(): void {
  }

}
