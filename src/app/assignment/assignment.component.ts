import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  username = ""
  showSecret = false;
  log = [0];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.log.push(this.log.length + 1);
  }

}
