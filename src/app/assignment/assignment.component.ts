import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  username = ""
  showSecret = false;
  log = [new Date()];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
