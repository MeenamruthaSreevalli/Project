import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  im:boolean=false
  check(): void{
    this.im=!this.im
  }
  img:boolean=false
  open(): void{
    this.img=!this.img
  }

   

}
