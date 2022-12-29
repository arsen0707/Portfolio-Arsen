import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrls: ['./my-skills-section.component.scss']
})
export class MySkillsSectionComponent implements OnInit {

  photos =['Angular','Api','Css','Html',
  'Javascript','Ts','Scrum','Firebase','Frame','Git']

  photoNames=['Angular','Api','Css','Html','Javascript','Ts','Scrum','Firebase','Frame','Git']
  constructor() { }

  ngOnInit(): void {
  }



}
